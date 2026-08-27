/**
 * Central content file — edit portfolio copy here without touching components.
 * All placeholders are clearly marked; replace with real assets over time.
 */

export const profile = {
  name: 'Divya Sharma',
  role: 'Developer & Digital Solutions Builder',
  tagline: 'A developer who turns ideas and requirements into useful digital solutions.',
  location: 'India',
  email: 'divyasharmagdscoist@gmail.com', // Primary contact email
  githubUsername: 'Lrntbootwfc',
  linkedinUsername: 'divya-sharma6467',
  resumeUrl: '/Divya_Sharma_Resume.pdf',
  socials: [
    {
      label: 'Email',
      url: 'mailto:divyasharmagdscoist@gmail.com',
      identifier: 'Send an Email',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/divya-sharma6467',
      identifier: 'Connect on LinkedIn',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/Lrntbootwfc',
      identifier: 'View GitHub Profile',
    },
  ],
};

export const hero = {
  eyebrow: 'DEVELOPER · BUILDER · PROBLEM SOLVER',
  headline: 'Turning ideas into useful digital experiences.',
  supportingText:
    'I build websites and digital solutions for businesses, while working across data analytics, machine learning and intelligent systems.',
  capabilityLine: 'Web Development · Data Analytics · AI/ML',
  primaryCta: { label: 'View my work', href: '/#work' },
  secondaryCta: { label: 'Build something together', href: '/#contact' },
  photoName: 'pro pic',
  photoCandidates: [
    'images/propic.png',
    'images/propic.jpg',
  ],
  photoPlaceholder: false,
};

export const heroCredibility = [
  'B.Tech — Computer Science & Engineering',
  'OIST, Bhopal · 2026 · CGPA 8.5',
  'Web · Data · AI/ML',
  '350+ coding problems',
];

export const capabilities = [
  {
    id: 'build',
    number: '01',
    label: 'BUILD',
    title: 'Websites & Digital Products',
    items: [
      'Business websites',
      'E-commerce websites',
      'Landing pages',
      'Portfolio websites',
      'Web applications',
      'Responsive interfaces',
      'Backend/API integration',
    ],
    cta: { label: 'See web work', href: '/#work' },
  },
  {
    id: 'analyze',
    number: '02',
    label: 'ANALYZE',
    title: 'Data & Insights',
    items: [
      'Data cleaning & manipulation',
      'SQL',
      'Excel',
      'Python analytics',
      'Power BI',
      'Tableau',
      'Data visualization',
    ],
    cta: { label: 'See data work', href: '/#work' },
  },
  {
    id: 'explore',
    number: '03',
    label: 'EXPLORE',
    title: 'AI / ML / Intelligent Systems',
    items: [
      'Machine learning',
      'Predictive analytics',
      'Agentic AI',
      'Multi-agent systems',
      'Knowledge graphs',
      'AI-driven research frameworks',
    ],
    cta: { label: 'Explore AI work', href: '/#work' },
  },
];

// Used by the marquee CredibilityStrip further down the page
export const credibility = [
  'Full-stack Development',
  'Data Engineering',
  'Machine Learning',
  'Design Systems',
  'API Design',
];

export type CaseStudySection = {
  overview: string;
  problem: string;
  approach: string;
  architecture: {
    flow: string[];
    description: string;
  };
  implementation: string[];
  contribution: string[];
  visualPlaceholders: {
    id: string;
    title: string;
    description: string;
  }[];
  outcome: string;
  disclaimer?: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  projectName?: string;
  subtitle: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  coverPlaceholder: string;
  isHero?: boolean;
  isCommercial?: boolean;
  visualFlow?: string[];
  metricHighlight?: {
    value: string;
    label: string;
    note: string;
  };
  contribution?: string;
  role?: string;
  status?: string;
  liveUrl?: string;
  imageCandidates?: {
    primary?: string[];
    dashboard?: string[];
    architecture?: string[];
    graph?: string[];
    gallery?: string[];
  };
  caseStudy?: CaseStudySection;
};

export const projects: Project[] = [
  {
    slug: 'aidra',
    number: '01',
    title: 'AIDRA',
    subtitle: 'An Agentic Intelligence Framework for Explainable Drug Repurposing',
    category: 'AI / Agentic Intelligence & Knowledge Graphs',
    year: '2025',
    summary:
      'A deterministic multi-agent research framework designed to automate pharmaceutical literature investigation, explore molecular relationships and generate structured, explainable biological hypotheses.',
    tags: ['Python', 'CrewAI', 'FastAPI', 'Neo4j', 'React'],
    coverPlaceholder: 'AIDRA RESEARCH SUITE',
    isHero: true,
    status: 'Completed · B.Tech Final-Year Project',
    imageCandidates: {
      primary: ['landingpageaidra.png', 'landingpageaidra', 'dashboardaidra.png', 'dashboardaidra', 'aidra-landing'],
      dashboard: ['dashboardaidra.png', 'dashboardaidra', 'sampleresultaidra.png'],
      architecture: [
        'databasenodesaidra.png',
        'databasenodesaidra',
        'aidra-architecture',
      ],
      graph: [
        'databasenodesaidra.png',
        'databasenodesaidra',
        'sampleresultaidra.png',
      ],
    },
    contribution:
      'Designed and developed the overall system architecture, implemented the FastAPI backend, integrated the CrewAI multi-agent pipeline, and configured Neo4j database interactions.',
    visualFlow: [
      'User Query',
      'React Frontend',
      'FastAPI Backend',
      'CrewAI Agents',
      'Neo4j Knowledge Graph',
      'Structured Hypothesis',
    ],
    caseStudy: {
      overview:
        'AIDRA (Agentic Intelligence for Drug Repurposing & Analysis) is an academic multi-agent research software framework. It orchestrates autonomous AI agents to search biomedical literature, traverse relational knowledge graphs, and construct explainable hypotheses for drug repurposing opportunities.',
      problem:
        'Investigating drug repurposing across thousands of scientific papers and biological databases is manual, slow, and prone to siloed knowledge gaps. Standard LLM approaches often hallucinate without verifiable biomedical citations or structured relational grounding.',
      approach:
        'AIDRA combines deterministic multi-agent orchestration (CrewAI) with graph database indexing (Neo4j). Specialist agents conduct targeted literature queries, map drug-target-disease nodes in Neo4j, and cross-reference interactions to produce traceably sourced hypothesis documents.',
      architecture: {
        flow: [
          'User (Research Input)',
          'React Dashboard (Query & Visualizer UI)',
          'FastAPI (REST & Agent Pipeline Orchestrator)',
          'CrewAI Agents (Literature, Graph & Synthesis)',
          'Neo4j (Knowledge Graph & Entity Relations)',
          'Structured Hypothesis (Evidence-backed Report)',
        ],
        description:
          'Queries submitted via the React UI are ingested by FastAPI, triggering asynchronous CrewAI agent tasks. The literature agent pulls and parses PubMed entries, the graph agent queries Neo4j for known molecular interaction paths, and the synthesizer agent outputs structured JSON hypotheses with citation traces.',
      },
      implementation: [
        'Built reactive dashboard in React for interactive hypothesis exploration and agent status monitoring.',
        'Developed high-performance asynchronous API endpoints using FastAPI to handle agent task execution.',
        'Integrated CrewAI multi-agent hierarchy with distinct literature retrieval, validation, and synthesis roles.',
        'Modeled and queried interconnected biomedical entities (compounds, targets, pathways, diseases) in Neo4j using Cypher.',
        'Implemented strict deterministic JSON response schema validation to ensure structured, reproducible agent outputs.',
      ],
      contribution: [
        'Architected the end-to-end technical system design and agent orchestration workflow.',
        'Built the complete FastAPI backend service with asynchronous task workers.',
        'Configured and integrated the CrewAI agent pipeline, prompt schemas, and tool definitions.',
        'Set up the Neo4j schema and Cypher query layer for relational entity traversal.',
        'Developed the frontend React interface for query dispatch and hypothesis inspection.',
      ],
      visualPlaceholders: [
        {
          id: 'dashboard',
          title: 'React Dashboard',
          description: 'Interface for entering compound queries, inspecting agent progress, and reading generated hypotheses.',
        },
        {
          id: 'graph',
          title: 'Knowledge Graph Visualization',
          description: 'Interactive Neo4j graph showing drug-target-disease relational paths and node attributes.',
        },
        {
          id: 'architecture',
          title: 'System Architecture Diagram',
          description: 'Detailed component topology showing React, FastAPI, CrewAI agent pipeline, and Neo4j connectivity.',
        },
        {
          id: 'demo',
          title: 'Demo Material & Output Schema',
          description: 'Sample structured JSON hypotheses containing evidence confidence scores and biomedical citations.',
        },
      ],
      outcome:
        'Delivered a fully working prototype that reliably transforms compound queries into comprehensive, multi-step relational reports in minutes rather than days of manual literature cross-referencing. Completed as a B.Tech Final-Year Capstone Project.',
      disclaimer:
        'Disclaimer: AIDRA is an academic research software prototype for computational hypothesis generation. It does not imply clinical validation, medical deployment, or real-world drug-discovery efficacy without laboratory testing.',
    },
  },
  {
    slug: 'comic-diary',
    number: '02',
    title: 'Comic Diary',
    subtitle: 'AI-Powered Visual Storytelling & Interactive Journaling Platform',
    category: 'Product Engineering · Full-Stack & Generative AI',
    year: '2024 – 2025',
    summary:
      'An interactive creative journaling platform that converts personal daily reflections into dynamic multi-panel visual comic strips using generative AI pipelines, a custom canvas editor, and narrative insights.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Generative AI', 'Canvas API', 'REST API'],
    coverPlaceholder: 'COMIC DIARY CREATIVE SUITE',
    status: 'Interactive Product Suite',
    liveUrl: 'https://comic-diary.onrender.com/',
    imageCandidates: {
      primary: [
        'comic result1.png',
        'comic result 2.png',
        'compilercomicdiary having examples  (1).png',
        'compilercomicdiary having examples  (2).png',
        'editorcomicdiary.png',
        'dashboardcomic diary.png',
      ],
      gallery: [
        'comic result1.png',
        'comic result 2.png',
        'compilercomicdiary having examples  (1).png',
        'compilercomicdiary having examples  (2).png',
      ],
      dashboard: [
        'dashboardcomic diary.png',
        'editorcomicdiary.png',
        'insightscomic diary.png',
      ],
      architecture: [
        'comic result1.png',
        'comic result 2.png',
        'messengercomicdiary.png',
        'editorcomicdiary.png',
      ],
    },
    visualFlow: [
      'Diary Entry / Thought',
      'Prompt Engine',
      'Panel Storyboard',
      'Visual Generation',
      'Interactive Canvas Editor',
      'Comic Compilation & Insights',
    ],
    metricHighlight: {
      value: 'Multi-Panel',
      label: 'Visual Comic Engine',
      note: 'Complete creative suite with custom panel editor, dialogue bubbles, emotional insights, and storytelling messenger.',
    },
    contribution:
      'Architected the full frontend application in React & TypeScript, developed the interactive comic strip editor and compiler, integrated generative prompt formatting, and designed feature workflows for mood insights and story reflection.',
    caseStudy: {
      overview:
        'Comic Diary is a full-featured creative web application designed to transform everyday journaling into visual storytelling. Users write journal thoughts or creative narratives, which are converted into structured comic panels with customizable layouts, dialogue bubbles, character interactions, and reflective emotional insights.',
      problem:
        'Traditional text journaling can feel repetitive and uninspiring for visual thinkers. Existing AI art generators produce standalone images without sequential narrative coherence, panel layout structure, or journaling reflection tools.',
      approach:
        'Built an integrated platform combining generative AI prompting with a purpose-built interactive canvas editor. The system parses diary entries into scene descriptions, structures them into comic panels, and allows users to fine-tune captions, dialogues, and visual assets before compiling finished comic strips.',
      architecture: {
        flow: [
          'User Diary Input / Story Prompt',
          'Prompt Parsing & Scene Breakdown Engine',
          'Generative Visual Staging Pipeline',
          'Interactive Canvas Editor (Panel & Text Bubble Layer)',
          'Comic Compiler & Export Engine',
          'Emotional & Narrative Insights Hub',
        ],
        description:
          'Diary inputs are processed into multi-panel scene blueprints. The frontend editor provides granular control over speech bubbles, layout dimensions, and character dialogue, while the backend and analytics modules surface emotional trends and thematic recommendations.',
      },
      implementation: [
        'Built a rich, responsive multi-view web application using React, TypeScript, and Tailwind CSS.',
        'Engineered an interactive Canvas editor supporting drag-and-drop panel repositioning, text bubble placement, and custom typographic styling.',
        'Developed a Comic Compiler module allowing users to sequence panels, preview comic strips in real time, and export finished high-resolution artwork.',
        'Created an Emotional & Narrative Insights dashboard visualizing mood trends, journaling consistency, and reflection keywords across entries.',
        'Implemented a Character Messenger feature simulating interactive dialogue scripting and narrative roleplay.',
        'Integrated a Contextual Media Discovery module recommending relevant books and movies aligned with comic themes.',
      ],
      contribution: [
        'Designed and developed the entire frontend architecture and responsive user interface in React and TypeScript.',
        'Implemented the interactive comic panel editing canvas with speech bubble overlay and styling controls.',
        'Built the Comic Compiler interface with example presets, layout toggles, and live strip previews.',
        'Constructed the insights dashboard for tracking emotional patterns and journal reflections.',
        'Created the Character Messenger module and media recommendation integration.',
      ],
      visualPlaceholders: [
        {
          id: 'compiler',
          title: 'Comic Compiler & Storyboards',
          description: 'Sequential panel generator displaying multi-scene comic strips with custom captions and presets.',
        },
        {
          id: 'editor',
          title: 'Interactive Comic Canvas Editor',
          description: 'Granular panel editor with speech bubbles, character dialogue placement, and styling tools.',
        },
        {
          id: 'dashboard',
          title: 'Dashboard & Journal Overview',
          description: 'Main application hub featuring recent comic strips, quick entry creation, and journal history.',
        },
        {
          id: 'insights',
          title: 'Emotional & Narrative Insights',
          description: 'Visual analytics dashboard tracking emotional trajectories and recurring story motifs.',
        },
        {
          id: 'messenger',
          title: 'Character Messenger & Dialogue',
          description: 'Interactive conversation interface for authoring character dialogues and scene interactions.',
        },
        {
          id: 'recommendations',
          title: 'Media & Cultural Discovery',
          description: 'Thematic recommendation system suggesting related literature and cinematic works.',
        },
      ],
      outcome:
        'Successfully engineered a full-featured creative journaling application combining generative AI workflows with precise canvas editing, establishing an engaging visual medium for daily reflection.',
    },
  },
  {
    slug: 'talent-sentinel',
    number: '03',
    title: 'Talent Sentinel',
    subtitle: 'Employee Attrition Prediction & HR Analytics',
    category: 'Data Analytics & Predictive Modeling',
    year: '2024',
    summary:
      'A predictive analytics system designed to identify patterns associated with employee attrition, evaluate risk factors, and support proactive organizational retention planning.',
    tags: ['Python', 'Logistic Regression', 'Flask', 'MySQL', 'Pandas'],
    coverPlaceholder: 'TALENT SENTINEL HR SUITE',
    imageCandidates: {
      primary: [
        'dashbaordtalent.png',
        'dashbaordtalent',
        "advanceworkforceanalysistalent'.png",
        'employeeretentionand departmentperformacetalent.png',
        'forecastriskvssatisfactiontalent.png',
      ],
      dashboard: [
        'dashbaordtalent.png',
        "advanceworkforceanalysistalent'.png",
        'monthlyattritiontrendtalent.png',
      ],
      architecture: [
        'employeeretentionand departmentperformacetalent.png',
        'forecastriskvssatisfactiontalent.png',
      ],
    },
    visualFlow: [
      'Raw HR Data',
      'Feature Engineering',
      'Logistic Regression',
      'Risk Prediction',
      'HR Insight Dashboard',
    ],
    metricHighlight: {
      value: '82%',
      label: 'Precision Metric',
      note: 'Model precision measured on test evaluation dataset (academic/project benchmark).',
    },
    contribution:
      'Engineered feature selection pipeline, trained and evaluated the classification model, built the Flask scoring API, and integrated MySQL database schema.',
    caseStudy: {
      overview:
        'Talent Sentinel analyzes historical workplace demographic, compensation, and satisfaction metrics to identify high-risk attrition trends, helping organizational leaders understand key turnover factors.',
      problem:
        'Unplanned employee turnover causes significant institutional knowledge loss and recruitment costs. HR departments frequently lack early quantifiable signals before departures occur.',
      approach:
        'Constructed an end-to-end analytics workflow that processes multivariate employee metrics, handles class imbalance, and provides interpretable coefficient weights explaining risk contributors.',
      architecture: {
        flow: [
          'HR Dataset',
          'Data Cleaning & Preprocessing',
          'Feature Engineering & Encoding',
          'Logistic Regression Classifier',
          'Flask API Engine',
          'HR Risk Insights View',
        ],
        description:
          'Historical employee data is cleaned and encoded through Pandas pipelines, scored via a tuned Logistic Regression estimator, and exposed through a lightweight Flask service.',
      },
      implementation: [
        'Executed exploratory data analysis and feature importance ranking on multidimensional HR datasets.',
        'Trained and validated Logistic Regression models using stratified k-fold cross-validation.',
        'Achieved 82% precision on the evaluated project test partition to minimize false positives.',
        'Built Flask endpoints to score single-employee records and generate factor breakdown summaries.',
        'Designed normalized MySQL schema to persist historical retention logs.',
      ],
      contribution: [
        'Built the end-to-end data preprocessing and feature transformation pipeline in Python.',
        'Trained, tuned, and evaluated the predictive classification model.',
        'Developed the Flask backend API and database integration.',
      ],
      visualPlaceholders: [
        {
          id: 'dashboard-talent',
          title: 'Executive HR Analytics Dashboard',
          description: 'Comprehensive KPI overview showing overall attrition rates, department distributions, and risk alerts.',
        },
        {
          id: 'workforce-analysis',
          title: 'Advanced Workforce Analytics',
          description: 'Multivariate breakdown correlating compensation bands, tenure, and department flight risk.',
        },
        {
          id: 'retention-performance',
          title: 'Employee Retention & Performance Analysis',
          description: 'Comparative charts mapping high-performing staff satisfaction against attrition probability.',
        },
        {
          id: 'monthly-trends',
          title: 'Monthly Attrition Forecast & Risk Matrix',
          description: 'Time-series attrition forecasting and satisfaction vs risk quadrant analysis.',
        },
      ],
      outcome:
        'Developed a complete, reproducible predictive analytics framework demonstrating how interpretable machine learning models provide actionable insights into organizational attrition factors.',
      disclaimer:
        'Disclaimer: 82% precision represents a benchmark metric on the project test evaluation dataset and does not imply real-world enterprise deployment.',
    },
  },
  {
    slug: 'ordermygiftnow',
    number: '04',
    title: 'Built for the real world',
    projectName: 'ORDERMYGIFTNOW',
    subtitle: 'Real-world E-Commerce / Gift-Delivery Website',
    category: 'Commercial Web Development & UI Design',
    year: '2024',
    summary:
      'Real-world e-commerce/gift-delivery website. Contributed to the design and visual experience of the website for a real-world gift business.',
    tags: ['E-Commerce', 'UI/UX Design', 'Responsive Web', 'Product Catalog', 'Frontend'],
    coverPlaceholder: 'ORDERMYGIFTNOW LIVE STORE',
    isCommercial: true,
    role: 'UI / Design Contribution',
    imageCandidates: {
      primary: [
        'landingpageordermygiftnow.png',
        'landingpageordermygiftnow',
        'ordermygiftnow.png',
        'ordermygiftnow',
      ],
      dashboard: ['landingpageordermygiftnow.png', 'ordermygiftnow.png'],
    },
    contribution:
      'Contributed to the design and visual experience of the website for a real-world gift business, focusing on responsive layout clarity, product showcase flow, and customer purchase pathways.',
    liveUrl: 'https://ordermygiftnow.com',
    caseStudy: {
      overview:
        'ORDERMYGIFTNOW is an active e-commerce and gift-delivery platform serving retail customers with curated gifts, customized merchandise, and scheduled local delivery services.',
      problem:
        'The business needed a polished, trustworthy digital storefront with clear mobile navigation, intuitive gift filtering, and friction-free checkout navigation.',
      approach:
        'Collaborated on crafting clean, high-conversion visual interfaces, optimizing product imagery arrangements, and streamlining mobile user interaction patterns.',
      architecture: {
        flow: [
          'Visitor / Mobile User',
          'Responsive Storefront UI',
          'Product & Gift Catalog',
          'Customization Options',
          'Cart & Checkout Flow',
          'Order Fulfillment',
        ],
        description:
          'User journeys are tailored for rapid gift discovery by occasion and recipient, leading seamlessly into gift personalization and checkout.',
      },
      implementation: [
        'Designed modular UI components for product catalog cards, category filters, and promotional banners.',
        'Ensured mobile-first responsiveness across varying device screen sizes.',
        'Refined typography hierarchy and color contrast for optimal product discoverability.',
      ],
      contribution: [
        'Contributed to UI design and visual layout for key storefront pages.',
        'Created responsive component wireframes and visual styling assets.',
        'Optimized user purchase pathways and mobile navigation ergonomics.',
      ],
      visualPlaceholders: [
        {
          id: 'storefront-mockup',
          title: 'Storefront Landing & Product Showcase',
          description: 'Storefront presentation showing hero curation, gift hampers, and responsive catalog browsing.',
        },
      ],
      outcome:
        'Delivered a refined, modern visual interface for a live commercial gift venture, elevating brand presentation and user shopping clarity.',
      disclaimer:
        'Note: Project ownership belongs to ORDERMYGIFTNOW; contributions were focused on UI and visual experience design.',
    },
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  technologies: string[];
  context: string;
  scope: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Data Analyst Intern',
    company: 'Hackveda',
    period: 'Aug 2025 – Oct 2025',
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Django', 'MySQL'],
    context: 'University Insight Portal',
    scope: '50K+ records analyzed and processed',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Coding Thinkers',
    period: 'Jul 2023 – Aug 2023',
    technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Responsive interfaces'],
    context: 'Interactive Web Applications',
    scope: '5+ applications developed and refined',
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Development',
    skills: ['Python', 'JavaScript', 'React', 'HTML/CSS', 'Flask', 'Django'],
  },
  {
    category: 'Data',
    skills: ['SQL', 'MySQL', 'Pandas', 'NumPy', 'Excel'],
  },
  {
    category: 'Analytics',
    skills: ['Power BI', 'Tableau'],
  },
  {
    category: 'AI / ML',
    skills: ['Scikit-learn', 'Logistic Regression', 'Random Forest', 'CrewAI'],
  },
  {
    category: 'Tools / Platforms',
    skills: ['Git', 'GitHub', 'Postman', 'Streamlit', 'Neo4j', 'VS Code'],
  },
];

export const exploring = [
  {
    title: 'Agentic AI',
    description: 'Deterministic multi-agent workflows, autonomous coordination patterns, and tool-augmented reasoning.',
  },
  {
    title: 'Generative AI',
    description: 'Structured output validation, prompt schemas, and knowledge grounding through retrieval architectures.',
  },
  {
    title: 'Data Visualization',
    description: 'Translating complex datasets into intuitive, high-clarity visual dashboards for business stakeholders.',
  },
  {
    title: 'AI-assisted development',
    description: 'Leveraging intelligent developer tooling to accelerate iteration speed while preserving code quality.',
  },
  {
    title: 'Building for real businesses',
    description: 'Bridging engineering logic with commercial objectives to deliver practical digital solutions.',
  },
];

export const howIWork = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand the business, audience and requirement.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define structure, features and visual direction.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Design, development and integrations.',
  },
  {
    step: '04',
    title: 'Refine',
    description: 'Testing, feedback and improvements.',
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Deployment and handover.',
  },
];

export const about = {
  headline: 'I like building things that make sense.',
  paragraphs: [
    'I work at the intersection of software development, data analytics, and intelligent systems. For me, these are not separate tracks—they are complementary ways of understanding problems and building solutions that actually work.',
    'Whether designing a clean website for a business, uncovering patterns in complex datasets, or developing an AI framework with machine learning models and knowledge graphs, my focus is always on practical utility and clean execution.',
    'I believe the best technical work happens when sound engineering principles meet real-world commercial needs. I learn by building, refine by testing, and enjoy turning ambiguous ideas into structured, dependable digital experiences.',
  ],
  focusAreas: [
    'Modern Web Engineering & React Applications',
    'Data Cleaning, SQL Pipelines & Insight Dashboards',
    'Predictive Modeling & Applied Machine Learning',
    'Agentic AI Architectures & Knowledge Graphs',
    'Collaborative Delivery for Real-World Businesses',
  ],
};

export type TestimonialItem = {
  id: string;
  name: string;
  role: string;
  relationship: string;
  avatarText: string;
  verified: boolean;
  highlightWords: string[];
  paragraphs: string[];
  skillsHighlighted: string[];
  date: string;
};

export const testimonials: TestimonialItem[] = [
  {
    id: 'amisha-kumari',
    name: 'Amisha Kumari',
    role: 'Project Collaborator & Teammate',
    relationship: 'Worked together on multiple projects',
    avatarText: 'AK',
    verified: true,
    highlightWords: [
      'very good understanding of projects',
      'strong technical understanding and a practical approach to solving problems',
      'communication and soft skills',
      'teamwork, understanding, and ability to take responsibility',
    ],
    paragraphs: [
      'I’ve had the opportunity to work with Divya on several projects, and she has always been a great team member. She has a *very good understanding of projects* and explains concepts clearly and confidently.',
      'She has a *strong technical understanding and a practical approach to solving problems*, which reflects in the projects she has worked on. She also has excellent *communication and soft skills* and knows how to work with and handle different people.',
      'Having worked with her on multiple projects, I’ve seen her *teamwork, understanding, and ability to take responsibility* firsthand. Overall, Divya is a skilled, reliable, and hardworking person with great potential for growth.',
    ],
    skillsHighlighted: [
      'Technical Problem Solving',
      'Clear Communication',
      'Team Leadership',
      'Reliability & Ownership',
    ],
    date: 'February 2025',
  },
];
