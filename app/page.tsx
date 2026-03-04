import fs from "fs";
import path from "path";
import PortfolioTabs, { PdfData } from "../components/PortfolioTabs";
import BackToTop from "../components/BackToTop";

export default function HomePage() {
  /* ===============================
     LOAD GALLERY IMAGES
  =============================== */

  const imagesDir = path.join(process.cwd(), "public/images");

  const imageFiles = fs.existsSync(imagesDir)
    ? fs
        .readdirSync(imagesDir)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort()
    : [];

  /* ===============================
     LOAD CHART IMAGES (NEW)
  =============================== */

  const chartsDir = path.join(process.cwd(), "public/charts");

  const chartFiles = fs.existsSync(chartsDir)
    ? fs
        .readdirSync(chartsDir)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort()
    : [];

  /* ===============================
     PDF DATA
  =============================== */

  const pdfFiles: PdfData[] = [
    {
      file: "/pdfs/J.P.Morgan_SCR_storytelling.pdf",
      cover: "/pdf-covers/J.P.Morgan_SCR_storytelling.png",
      title: "J.P.Morgan - SCR storytelling",
    },
    {
      file: "/pdfs/Portfolio_I.Daraev_2025.pdf",
      cover: "/pdf-covers/Portfolio_I.Daraev_2025.png",
      title: "My Portfolio",
    },
    {
      file: "/pdfs/Airbus.pdf",
      cover: "/pdf-covers/Airbus.png",
      title: "Airbus",
    },
    {
      file: "/pdfs/Sorwe.pdf",
      cover: "/pdf-covers/Sorwe.png",
      title: "Sorwe",
    },
    {
      file: "/pdfs/EcoTank.pdf",
      cover: "/pdf-covers/Ecotank.jpg",
      title: "EcoTank",
    },
    {
      file: "/pdfs/Zero.pdf",
      cover: "/pdf-covers/Zero.jpg",
      title: "Zero eDiscovery",
    },
    {
      file: "/pdfs/Volac.pdf",
      cover: "/pdf-covers/Volac.jpg",
      title: "Volac - Board Presentation",
    },
  ];

  /* ===============================
     RENDER
  =============================== */

  return (
    <>
      {/* ================= JOB STYLE LAYOUT ================= */}
      <section className="section">
        <div className="job-layout">

          {/* MAIN CARD */}
          <div className="job-main-card">

            {/* TOP GRID */}
            <div className="job-top-grid">

              {/* About */}
              <div>
                <h3>About</h3>
                <ul className="fact-list">
                  <li>15+ years of experience in presentation design</li>
                  <li>Cross-specialist with experience in public sector and consulting</li>
                  <li>Executive and management experience</li>
                  <li>Expert-level skills in Microsoft PowerPoint (incl. VBA macros)</li>
                  <li>Proficient in Adobe Illustrator, Photoshop, Figma</li>
                  <li>Strong data visualization skills with ability to turn ideas into strong visuals</li>
                </ul>
              </div>

              {/* Tools */}
              <div>
                <h3>Tools</h3>
                <div className="skills-pills">
                  <span>PowerPoint</span>
                  <span>VBA (PPT, Word, Excel)</span>
                  <span>Excel</span>
                  <span>Visio</span>
                  <span>Google Slides</span>
                  <span>Figma</span>
                  <span>think-cell</span>
                  <span>PPT Productivity</span>
                  <span>Adobe CC</span>
                  <span>Blender</span>
                  <span>Python</span>
                  <span>AI</span>
                </div>
              </div>

              {/* Expertise */}
              <div>
                <h3>Specialization & Expertise</h3>
                <ul className="bullet-list">
                  <li>
                    <strong>Core:</strong> presentation design (C-level/executive, board, consulting, 
                    analytical, investor, marketing, financial, pitches), visualization 
                  of complex economic and financial data, analysis, storytelling (Pyramid Principle, SCR framework),  
                  information structuring, formatting and layout (Big4, Big3)
                  </li>
                  <li>
                    <strong>Visuals:</strong> financial and custom diagrams, charts and metrics (Excel/PowerPoint), maps, tables
                  </li>
                  <li>
                    <strong>Products:</strong> business presentations, client reports, marketing materials (proposals, memos, one-pagers, annual reports)
                  </li>
                  <li>
                    <strong>Industries:</strong> consulting, investment banks,
                    fintech, corporate finance, IT, industry
                  </li>
                </ul>
              </div>

            </div>

            <hr className="divider" />

            {/* BOTTOM GRID */}
            <div className="job-bottom-grid">

              <div>
                <h3>Other Skills</h3>
                <ul className="bullet-list">
                  <li>Fast immersion into new industries and business chains</li>
                  <li>Creative problem solving</li>
                  <li>Process optimization</li>
                  <li>Accountability</li>
                  <li>Meeting tight deadlines</li>
                </ul>
              </div>

              <div>
                <h3>Education & Certifications</h3>
                <ul className="bullet-list">
                  <li><strong>2025:</strong> Introduction to Corporate Finance (The Wharton School of the University of Pennsylvania)</li>
                  <li><strong>2024:</strong> Consulting Presentations and Storytelling (Emory University), Business Presentations with PowerPoint (PriceWaterhouseCoopers), UX/UI design (Google, IBM)</li>
                  <li><strong>2023:</strong> Google IT Automation with Python Certificate (Google)</li>
                  <li><strong>2022:</strong> ISTQB (ASTQB); PCEP – Certified Entry-Level Python Programmer (Python Institute); 
                  Higher School of Economics - Python  for data analysis (on-site)</li>
                  <li><strong>2021:</strong> IELTS Academic; Business Case Structuring (Fless)</li>
                </ul>
              </div>

            </div>
          </div>

          {/* SIDEBAR */}
          <div className="job-sidebar">
            <div className="company-card">

              <div className="company-header">
                <div className="company-logo">ID</div>
                <h3>Iskander Daraev</h3>
              </div>

              <div className="company-info">
                <h3><strong>Current Position</strong></h3>
                <p><strong>Company:</strong> Deloitte CIS (2023 – present)</p>
                <p><strong>Title:</strong> Manager, Head of Report Production and Information Design</p>
                <p><strong>Department:</strong> Financial Advisory</p>
              </div>

              <div className="company-links">
                <a href="https://www.linkedin.com/in/iskdaraev/" target="_blank">
                  LinkedIn
                </a>
                <a href="https://www.behance.net/iskdaraev" target="_blank">
                  Behance
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="section">
        <div className="portfolio-wrapper">
          <PortfolioTabs
            images={imageFiles}
            pdfs={pdfFiles}
            charts={chartFiles}   
          />
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section contact-section">
        <h2>Get in touch</h2>

        <form
          className="contact-form"
          action="https://formspree.io/f/xpqqzaww"
          method="POST"
        >
          <div className="form-group">
            <label>Name<span>*</span></label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>E-mail<span>*</span></label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Message<span>*</span></label>
            <textarea name="message" rows={5} required />
          </div>

          <button type="submit" className="form-submit">
            Send message →
          </button>
        </form>
      </section>

      <BackToTop />
    </>
  );
}