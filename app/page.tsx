import fs from "fs";
import path from "path";
import PortfolioTabs, { PdfData } from "../components/PortfolioTabs";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function HomePage() {
  const imagesDir = path.join(process.cwd(), "public/images");
  const imageFiles = fs.existsSync(imagesDir)
    ? fs
        .readdirSync(imagesDir)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort()
    : [];

  const pdfFiles: PdfData[] = [
    { file: "/pdfs/J.P.Morgan_SCR_storytelling.pdf", cover: "/pdf-covers/J.P.Morgan_SCR_storytelling.png", title: "J.P.Morgan - SCR storytelling" },
    { file: "/pdfs/Portfolio_I.Daraev_2025.pdf", cover: "/pdf-covers/Portfolio_I.Daraev_2025.png", title: "My Portfolio" },
    { file: "/pdfs/Airbus.pdf", cover: "/pdf-covers/Airbus.png", title: "Airbus" },
    { file: "/pdfs/Sorwe.pdf", cover: "/pdf-covers/Sorwe.png", title: "Sorwe" },
    { file: "/pdfs/EcoTank.pdf", cover: "/pdf-covers/Ecotank.jpg", title: "EcoTank" },
    { file: "/pdfs/Zero.pdf", cover: "/pdf-covers/Zero.jpg", title: "Zero eDiscovery" },
    { file: "/pdfs/Volac.pdf", cover: "/pdf-covers/Volac.jpg", title: "Volac - Board Presentation" },
    { file: "/pdfs/Idbi.pdf", cover: "/pdf-covers/Idbi.jpg", title: "IDBI Bank - Investors Presentation" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="hero hero-gray">
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/avatar.png" alt="Iskander Daraev" className="hero-avatar" />
          </div>
          <div>
            <h1 className="hero-title">Iskander Daraev</h1>
            <p className="hero-subtitle">
              Consulting and Corporate Finance Presentations – Storytelling & Design
            </p>
          </div>
        </div>
      </section>

      {/* ================= JOB STYLE LAYOUT ================= */}
      <section className="section">
        <div className="job-layout">

          {/* MAIN CARD */}
          <div className="job-main-card">

            {/* TOP GRID */}
            <div className="job-top-grid">

              {/* Key Facts */}
              <div>
                <h3>Key Facts</h3>
                <ul className="fact-list">
                  <li><strong>Remote From:</strong> Anywhere</li>
                  <li><strong>Contract:</strong> Fixed term</li>
                  <li><strong>Language:</strong> English</li>
                </ul>
              </div>

              {/* Hard Skills */}
              <div>
                <h3>Hard Skills</h3>
                <div className="skills-pills">
                  <span>PowerPoint</span>
                  <span>Excel</span>
                  <span>Visio</span>
                  <span>Google Slides</span>
                  <span>Figma</span>
                  <span>Presentation Design</span>
                  <span>Infographics</span>
                  <span>Data visualization</span>
                  <span>Financial charts</span>
                  <span>Adobe Creative Cloud</span>
                </div>
              </div>

              {/* Other Skills */}
              <div>
                <h3>Other Skills</h3>
                <ul className="bullet-list">
                  <li>Storytelling (Pyramid Principle, SCR framework)</li>
                  <li>Quick immersion in new industries and business chains</li>
                  <li>Creative Problem Solving</li>
                  <li>Team organization and process optimization</li>
                  <li>Accountability</li>
                  <li>Ability To Meet Deadlines</li>
                  
                </ul>
              </div>

            </div>

            <hr className="divider" />

            {/* BOTTOM GRID */}
            <div className="job-bottom-grid">

              <div>
                <h3>Roles & Responsibilities</h3>
                <ul className="bullet-list">
                  <li>5+ years of experience in presentation graphic design</li>
                  <li>Expert-level skills in Microsoft PowerPoint and Google Slides</li>
                  <li>Proficient in Adobe Illustrator, Photoshop, and XD</li>
                  <li>Strong Figma skills with ability to turn ideas into strong visuals</li>
                </ul>
              </div>

              <div>
                <h3>Requirements</h3>
                <ul className="bullet-list">
                  <li>Create on-strategy, on-brand presentation materials</li>
                  <li>Deliver strong conceptual thinking with high-quality execution</li>
                  <li>Pay close attention to detail in every slide</li>
                  <li>Research industry trends and continuously improve output</li>
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
                <p><strong>Founded:</strong> 2010</p>
                <p><strong>Company size:</strong> Independent</p>
              </div>

              <div className="company-links">
                <a href="#">Website</a>
                <a href="https://www.linkedin.com/in/iskdaraev/" target="_blank">LinkedIn</a>
                <a href="#portfolio">See portfolio →</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="section">
        <div className="portfolio-wrapper">
          <PortfolioTabs images={imageFiles} pdfs={pdfFiles} />
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
      <Footer />
    </>
  );
}
