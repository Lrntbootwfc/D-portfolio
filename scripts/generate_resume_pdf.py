#!/usr/bin/env python3
"""
Generates a valid, professional single-page PDF Resume for Divya Sharma.
Pure Python implementation of PDF 1.4 specification without external dependencies.
"""
import sys

def create_resume_pdf(output_path):
    # PDF Content stream
    # Coordinates in PDF points: 612 x 792 (Letter)
    commands = []
    
    def rgb(r, g, b):
        return f"{r/255.0:.3f} {g/255.0:.3f} {b/255.0:.3f} rg"
    
    def rect(x, y, w, h, fill_rgb=None, stroke_rgb=None):
        out = []
        if fill_rgb:
            out.append(f"{fill_rgb[0]/255.0:.3f} {fill_rgb[1]/255.0:.3f} {fill_rgb[2]/255.0:.3f} rg")
            out.append(f"{x:.1f} {y:.1f} {w:.1f} {h:.1f} re f")
        if stroke_rgb:
            out.append(f"{stroke_rgb[0]/255.0:.3f} {stroke_rgb[1]/255.0:.3f} {stroke_rgb[2]/255.0:.3f} RG")
            out.append(f"0.75 w")
            out.append(f"{x:.1f} {y:.1f} {w:.1f} {h:.1f} re S")
        return "\n".join(out)
    
    def line(x1, y1, x2, y2, stroke_rgb=(200, 205, 215), width=0.75):
        return f"{stroke_rgb[0]/255.0:.3f} {stroke_rgb[1]/255.0:.3f} {stroke_rgb[2]/255.0:.3f} RG {width} w {x1:.1f} {y1:.1f} m {x2:.1f} {y2:.1f} l S"

    def text(x, y, txt, font="F1", size=10, fill_rgb=(30, 41, 59)):
        safe_txt = txt.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
        color = f"{fill_rgb[0]/255.0:.3f} {fill_rgb[1]/255.0:.3f} {fill_rgb[2]/255.0:.3f} rg"
        return f"BT /{font} {size} Tf {color} {x:.1f} {y:.1f} Td ({safe_txt}) Tj ET"

    # Background
    commands.append(rect(0, 0, 612, 792, fill_rgb=(250, 250, 252)))
    
    # Header Accent bar
    commands.append(rect(0, 784, 612, 8, fill_rgb=(37, 99, 235)))
    
    # Header container
    commands.append(rect(36, 680, 540, 92, fill_rgb=(255, 255, 255), stroke_rgb=(226, 232, 240)))
    
    # Name & Role
    commands.append(text(54, 742, "DIVYA SHARMA", font="F2", size=20, fill_rgb=(15, 23, 42)))
    commands.append(text(54, 725, "Software Developer & Digital Solutions Builder", font="F2", size=10, fill_rgb=(37, 99, 235)))
    commands.append(text(54, 708, "B.Tech in Computer Science & Engineering | OIST Bhopal (2026) | CGPA: 8.5", font="F1", size=8.5, fill_rgb=(71, 85, 105)))
    commands.append(text(54, 694, "Portfolio: https://comic-diary.onrender.com | GitHub: github.com/Lrntbootwfc | LinkedIn: linkedin.com/in/divya-sharma6467", font="F1", size=8, fill_rgb=(100, 116, 139)))
    
    # Section 1: Technical Skills
    commands.append(text(36, 658, "TECHNICAL SKILLS", font="F2", size=10.5, fill_rgb=(15, 23, 42)))
    commands.append(line(36, 652, 576, 652, stroke_rgb=(203, 213, 225), width=1))
    
    skills_data = [
        ("Core & Languages:", "Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3/Tailwind"),
        ("Frameworks & Web:", "React.js, FastAPI, Flask, Django, Node.js/Express, Vite, RESTful APIs"),
        ("Data & Analytics:", "Pandas, NumPy, Scikit-Learn, Power BI, Tableau, MySQL, Neo4j, Excel"),
        ("AI / ML & Tools:", "CrewAI, Multi-Agent Systems, Knowledge Graphs, Predictive Modeling, Git, VS Code")
    ]
    y_pos = 636
    for label, items in skills_data:
        commands.append(text(46, y_pos, label, font="F2", size=8.5, fill_rgb=(30, 41, 59)))
        commands.append(text(145, y_pos, items, font="F1", size=8.5, fill_rgb=(51, 65, 85)))
        y_pos -= 14

    # Section 2: Experience
    y_pos -= 4
    commands.append(text(36, y_pos, "EXPERIENCE & INTERNSHIPS", font="F2", size=10.5, fill_rgb=(15, 23, 42)))
    commands.append(line(36, y_pos - 6, 576, y_pos - 6, stroke_rgb=(203, 213, 225), width=1))
    y_pos -= 20
    
    # Hackveda
    commands.append(text(46, y_pos, "Data Analyst Intern  --  Hackveda", font="F2", size=9.5, fill_rgb=(15, 23, 42)))
    commands.append(text(460, y_pos, "Aug 2025 - Oct 2025", font="F2", size=8.5, fill_rgb=(37, 99, 235)))
    y_pos -= 13
    commands.append(text(54, y_pos, "- Analyzed and processed 50,000+ records for the University Insight Portal using Python (Pandas, NumPy) and SQL.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 12
    commands.append(text(54, y_pos, "- Built relational data pipelines in MySQL and Django, optimizing query performance for multi-dimensional dashboards.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 17
    
    # Coding Thinkers
    commands.append(text(46, y_pos, "Frontend Developer Intern  --  Coding Thinkers", font="F2", size=9.5, fill_rgb=(15, 23, 42)))
    commands.append(text(460, y_pos, "Jul 2023 - Aug 2023", font="F2", size=8.5, fill_rgb=(37, 99, 235)))
    y_pos -= 13
    commands.append(text(54, y_pos, "- Developed 5+ responsive, interactive web applications using React.js, JavaScript, HTML5, and CSS3.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 12
    commands.append(text(54, y_pos, "- Collaborated on reusable UI components, client-side state management, and cross-browser performance tuning.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 20

    # Section 3: Key Projects
    commands.append(text(36, y_pos, "KEY PROJECTS", font="F2", size=10.5, fill_rgb=(15, 23, 42)))
    commands.append(line(36, y_pos - 6, 576, y_pos - 6, stroke_rgb=(203, 213, 225), width=1))
    y_pos -= 20
    
    # Project 1: AIDRA
    commands.append(text(46, y_pos, "AIDRA - Explainable Drug Repurposing Framework", font="F2", size=9.5, fill_rgb=(15, 23, 42)))
    commands.append(text(460, y_pos, "Final Year Capstone | 2025", font="F1", size=8, fill_rgb=(100, 116, 139)))
    y_pos -= 13
    commands.append(text(54, y_pos, "- Designed a deterministic multi-agent research framework using CrewAI, FastAPI, Neo4j, and React.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 12
    commands.append(text(54, y_pos, "- Implemented graph traversal pipelines querying relational molecular paths across compounds, targets, and diseases.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 12
    commands.append(text(54, y_pos, "- Enforced strict Pydantic JSON validation producing verifiable biomedical citations and confidence scoring.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 17

    # Project 2: Comic Diary
    commands.append(text(46, y_pos, "Comic Diary - AI-Powered Visual Journaling Platform", font="F2", size=9.5, fill_rgb=(15, 23, 42)))
    commands.append(text(460, y_pos, "Live Platform | 2024 - 2025", font="F1", size=8, fill_rgb=(100, 116, 139)))
    y_pos -= 13
    commands.append(text(54, y_pos, "- Built full-stack visual storytelling suite in React, TypeScript, and Tailwind converting daily thoughts into multi-panel comics.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 12
    commands.append(text(54, y_pos, "- Engineered custom Canvas editor for speech bubble placement, comic panel sequencing, and high-res strip export.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 12
    commands.append(text(54, y_pos, "- Integrated emotional trajectory analytics and media recommendation engine. Live: https://comic-diary.onrender.com", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 17

    # Project 3: Talent Sentinel
    commands.append(text(46, y_pos, "Talent Sentinel - Employee Attrition Predictive Analytics", font="F2", size=9.5, fill_rgb=(15, 23, 42)))
    commands.append(text(460, y_pos, "Predictive Modeling | 2024", font="F1", size=8, fill_rgb=(100, 116, 139)))
    y_pos -= 13
    commands.append(text(54, y_pos, "- Developed machine learning pipeline using Python, Logistic Regression, Flask, and MySQL to forecast workplace turnover risk.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 12
    commands.append(text(54, y_pos, "- Achieved 82% precision benchmark with feature importance ranking explaining key retention drivers.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 17

    # Project 4: OrderMyGiftNow
    commands.append(text(46, y_pos, "ORDERMYGIFTNOW - Real-World E-Commerce Storefront", font="F2", size=9.5, fill_rgb=(15, 23, 42)))
    commands.append(text(460, y_pos, "Commercial Web | 2024", font="F1", size=8, fill_rgb=(100, 116, 139)))
    y_pos -= 13
    commands.append(text(54, y_pos, "- Designed responsive UI and customer purchase journey for active commercial gift and custom delivery venture.", font="F1", size=8.5, fill_rgb=(51, 65, 85)))
    y_pos -= 19

    # Section 4: Education & Certifications
    commands.append(text(36, y_pos, "EDUCATION & ACHIEVEMENTS", font="F2", size=10.5, fill_rgb=(15, 23, 42)))
    commands.append(line(36, y_pos - 6, 576, y_pos - 6, stroke_rgb=(203, 213, 225), width=1))
    y_pos -= 19
    
    commands.append(text(46, y_pos, "Bachelor of Technology in Computer Science & Engineering", font="F2", size=9, fill_rgb=(15, 23, 42)))
    commands.append(text(460, y_pos, "2022 - 2026 | CGPA: 8.5", font="F2", size=8.5, fill_rgb=(37, 99, 235)))
    y_pos -= 12
    commands.append(text(46, y_pos, "Oriental Institute of Science & Technology (OIST), Bhopal, Madhya Pradesh, India", font="F1", size=8.5, fill_rgb=(71, 85, 105)))
    y_pos -= 14
    commands.append(text(46, y_pos, "Achievements: 350+ Coding Problems Solved on Competitive Platforms | Active Technical Builder", font="F1", size=8.5, fill_rgb=(51, 65, 85)))

    # Assemble PDF stream
    content_stream = "\n".join(commands)
    content_len = len(content_stream.encode('latin1'))

    pdf_objects = []
    
    # 1: Catalog
    pdf_objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj")
    
    # 2: Pages
    pdf_objects.append("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj")
    
    # 3: Page
    pdf_objects.append(
        "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
        "/Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj"
    )
    
    # 4: Contents
    pdf_objects.append(
        f"4 0 obj\n<< /Length {content_len} >>\nstream\n{content_stream}\nendstream\nendobj"
    )
    
    # 5: Font Regular (Helvetica)
    pdf_objects.append(
        "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj"
    )
    
    # 6: Font Bold (Helvetica-Bold)
    pdf_objects.append(
        "6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj"
    )
    
    # Build file
    out = ["%PDF-1.4\n"]
    offsets = []
    current_offset = len(out[0].encode('latin1'))
    
    for obj in pdf_objects:
        offsets.append(current_offset)
        out.append(obj + "\n")
        current_offset += len((obj + "\n").encode('latin1'))
        
    xref_offset = current_offset
    out.append(f"xref\n0 {len(pdf_objects) + 1}\n")
    out.append("0000000000 65535 f \n")
    for off in offsets:
        out.append(f"{off:010d} 00000 n \n")
        
    out.append(f"trailer\n<< /Size {len(pdf_objects) + 1} /Root 1 0 R >>\n")
    out.append(f"startxref\n{xref_offset}\n%%EOF\n")
    
    full_pdf = "".join(out).encode('latin1')
    with open(output_path, "wb") as f:
        f.write(full_pdf)
    print(f"Successfully generated PDF at {output_path} ({len(full_pdf)} bytes)")

if __name__ == "__main__":
    out_file = sys.argv[1] if len(sys.argv) > 1 else "public/Divya_Sharma_Resume.pdf"
    create_resume_pdf(out_file)
