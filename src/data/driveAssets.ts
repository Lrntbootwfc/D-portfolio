/**
 * Google Drive Asset Configuration & Direct URL Resolver
 * 
 * Access Setting on Drive: "Anyone with the link can view" (Viewer)
 * 
 * How to add Drive File IDs:
 * 1. Open your Drive folder: https://drive.google.com/drive/folders/1v_ymgGdC6Ly1QRfCtxFaSii1Kc875hqS
 * 2. Right click any file -> Share -> Copy Link (e.g. https://drive.google.com/file/d/1AbC...XyZ/view)
 * 3. Paste the file ID or full URL in the mapping below.
 */

export const GOOGLE_DRIVE_FOLDER_URL =
  'https://drive.google.com/drive/folders/1v_ymgGdC6Ly1QRfCtxFaSii1Kc875hqS?usp=drive_link';

/**
 * Mapping of file names to Google Drive File IDs or Full URLs.
 * Whenever an ID is provided here, the app will attempt to load from Google Drive first,
 * with automatic fallback to local /images/ if Drive is slow, offline, or rate-limited.
 */
export const GOOGLE_DRIVE_FILE_IDS: Record<string, string> = {
  // Profile Photo & Resume
  'pro pic.png': '',
  'pro pic.jpg': '',
  'Divya_Sharma_Resume.pdf': '',
  'resume.pdf': '',

  // AIDRA Project
  'landingpageaidra.png': '',
  'dashboardaidra.png': '',
  'databasenodesaidra.png': '',
  'sampleresultaidra.png': '',

  // Talent Retention / HR Analytics Project
  'dashboardtalent.png': '',
  'dashbaordtalent1.png': '',
  'advanceworkforceanalysistalent.png': '',
  'employeeretentionand departmentperformacetalent.png': '',
  'monthlyattritiontrendtalent.png': '',
  'forecastriskvssatisfactiontalent.png': '',

  // Comic Diary Project
  'comic compilercomicdiary.png': '',
  'editorcomicdiary.png': '',
  'dashboardcomic diary.png': '',
  'insightscomic diary.png': '',
  'messengercomicdiary.png': '',
  'moviesand books comic diary.png': '',
  'compilercomicdiary having examples  (1).png': '',
  'compilercomicdiary having examples  (2).png': '',
  'comic result1.png': '',
  'comic result 2.png': '',

  // Order My Gift Now Project
  'landingpageordermygiftnow.png': '',
};

/**
 * Extracts a Google Drive File ID from a full link or returns the ID if already clean.
 */
export function extractDriveFileId(input: string): string | null {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  // If it's already an ID (alphanumeric with dashes/underscores, no slashes)
  if (/^[a-zA-Z0-9_-]{20,}$/.test(trimmed)) {
    return trimmed;
  }

  // If it's a full Google Drive URL
  const match = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || trimmed.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return match[1];
  }

  return null;
}

/**
 * Returns high-speed CDN direct image URLs from a Google Drive File ID
 */
export function getDriveImageUrls(fileIdOrUrl: string): string[] {
  const id = extractDriveFileId(fileIdOrUrl);
  if (!id) return [];

  return [
    // High-performance Google User Content CDN (Fastest for <img> tags)
    `https://lh3.googleusercontent.com/d/${id}`,
    // Direct thumbnail format (high resolution)
    `https://drive.google.com/thumbnail?id=${id}&sz=w2000`,
    // Standard Google Drive uc export
    `https://drive.google.com/uc?export=view&id=${id}`,
  ];
}

/**
 * Returns direct download/view URL for PDFs like Resumes
 */
export function getDrivePdfUrl(fileIdOrUrl: string): string {
  const id = extractDriveFileId(fileIdOrUrl);
  if (!id) return '';
  return `https://drive.google.com/file/d/${id}/view?usp=sharing`;
}

/**
 * Helper to get all candidate URLs for a given filename:
 * 1. Checks Google Drive mapping first
 * 2. Checks standard local static paths as fallback
 */
export function resolveAssetCandidates(filename: string): string[] {
  if (!filename) return [];

  const candidates: string[] = [];

  // 1. Check if filename or clean name has a Drive ID registered
  const cleanName = filename.replace(/^\/+/, '').replace(/^images\//, '');
  const driveIdOrUrl = GOOGLE_DRIVE_FILE_IDS[cleanName] || GOOGLE_DRIVE_FILE_IDS[filename];

  if (driveIdOrUrl) {
    const driveUrls = getDriveImageUrls(driveIdOrUrl);
    candidates.push(...driveUrls);
  }

  // 2. Add local paths as immediate fallback (for localhost & bundled assets)
  candidates.push(
    `/${cleanName}`,
    `/images/${cleanName}`,
    `/assets/images/${cleanName}`,
    filename
  );

  return Array.from(new Set(candidates));
}
