'use client';

import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import PdfCard from "./PdfCard";
import ImageModal from "./ImageModal";

export type PdfData = {
  file: string;
  cover: string;
  title: string;
};

export type CaseStudyData = {
  slug: string;
  cover: string;
  title: string;
  description: string;
};

type Props = {
  images: string[];
  pdfs: PdfData[];
  charts: string[];
  dashboards: string[];
};

type TabType = "gallery" | "pdfs" | "charts" | "dashboards";

export default function PortfolioTabs({
  images,
  pdfs,
  charts,
  dashboards
}: Props) {

  const [activeTab, setActiveTab] = useState<TabType>("gallery");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const anchorRef = useRef<HTMLDivElement>(null);
  const freezePoint = useRef<number>(0);

  const caseStudies: CaseStudyData[] = [
    {
      slug: "Idbi",
      cover: "/pdf-covers/Idbi.jpg",
      title: "IDBI Bank - Investors Presentation",
      description: "Presentation redesign and formatting"
    }
  ];

  /* ================= HASH NAVIGATION ================= */

  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#presentations") setActiveTab("pdfs");
    if (hash === "#charts") setActiveTab("charts");
    if (hash === "#dashboards") setActiveTab("dashboards");
  }, []);

  /* ================= STICKY HEADER ================= */

  useEffect(() => {
    if (!anchorRef.current) return;

    freezePoint.current =
      anchorRef.current.getBoundingClientRect().top + window.scrollY;

    const onScroll = () => {
      setIsFixed(window.scrollY >= freezePoint.current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= IMAGE SOURCE ================= */

  const getImagesForTab = () => {
    if (activeTab === "charts") return charts.map(img => `/charts/${img}`);
    if (activeTab === "dashboards") return dashboards.map(img => `/dashboards/${img}`);
    return images.map(img => `/images/${img}`);
  };

  const currentImages = getImagesForTab();

  return (
    <>
      <div ref={anchorRef} />

      {/* ================= HEADER ================= */}

      <div className={`works-sticky ${isFixed ? "fixed" : ""}`}>
        <h2>My works</h2>

        <div className="works-tabs">

          <button
            className={activeTab === "gallery" ? "tab active" : "tab"}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>

          <button
            className={activeTab === "pdfs" ? "tab active" : "tab"}
            onClick={() => setActiveTab("pdfs")}
          >
            Presentations
          </button>

          <button
            className={activeTab === "charts" ? "tab active" : "tab"}
            onClick={() => setActiveTab("charts")}
          >
            Charts
          </button>

          <button
            className={activeTab === "dashboards" ? "tab active" : "tab"}
            onClick={() => setActiveTab("dashboards")}
          >
            Dashboards
          </button>

        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="works-content">

        {/* ===== GALLERY ===== */}

        {activeTab === "gallery" && (
          <div className="works-grid">
            {images.map((img, index) => (
              <ProjectCard
                key={img}
                image={`/images/${img}`}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
        )}

        {/* ===== PRESENTATIONS ===== */}

        {activeTab === "pdfs" && (
          <div className="works-grid">

            {caseStudies.map(study => (
              <a
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="card pdf-card case-study-card"
              >

                <img
                  src={study.cover}
                  alt={study.title}
                  className="card-image"
                />

                <div className="card-caption">

                  <div className="case-title">
                    {study.title}
                  </div>

                  <div className="case-description">
                    {study.description}
                  </div>

                  <div className="case-link">
                    View case study →
                  </div>

                </div>

              </a>
            ))}

            {pdfs.map(pdf => (
              <PdfCard
                key={pdf.file}
                file={pdf.file}
                cover={pdf.cover}
                title={pdf.title}
              />
            ))}

          </div>
        )}

        {/* ===== CHARTS ===== */}

        {activeTab === "charts" && (
          <div className="charts-wrapper">

            <div className="charts-description">
              <h3>Financial & Analytical Charts</h3>

              <p>
                Selected custom charts created for consulting and banking presentations (mostly in Excel/PowerPoint). 
                Emphasis on the visualization of economic information and financial metrics (revenue and EBITDA forecasts, 
                factor analysis, multiple comparison, value map, sensitivity analysis, DCF and WACC calculations; BS, PL).
              </p>

              <p>
                Areas of specialization (in charts): valuation, due diligence, transactions, M&A, consulting
              </p>
            </div>

            <div className="works-grid">
              {charts.map((chart, index) => (
                <ProjectCard
                  key={chart}
                  image={`/charts/${chart}`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>

          </div>
        )}

        {/* ===== DASHBOARDS ===== */}

        {activeTab === "dashboards" && (
          <div className="dashboards-wrapper">

            <div className="dashboards-description">
              <h3>Analytical Dashboards</h3>

              <p>
                My business dashboards designed for executive reporting and
                consulting projects. Focus on KPI tracking, financial
                performance monitoring and strategic analytics.
              </p>

              <p>
                Dashboards combine structured layouts, clear hierarchy and
                complex metrics visualization for decision-makers.
              </p>
            </div>

            <div className="dashboards-grid">
              {dashboards.map((img, index) => (
                <ProjectCard
                  key={img}
                  image={`/dashboards/${img}`}
                  onClick={() => setActiveImageIndex(index)}
                  noCaption
                />
              ))}
            </div>

          </div>
        )}

      </div>

      {/* ================= MODAL ================= */}

      {activeImageIndex !== null && (
        <ImageModal
          images={currentImages}
          index={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onPrev={() =>
            setActiveImageIndex(
              (i) => (i! - 1 + currentImages.length) % currentImages.length
            )
          }
          onNext={() =>
            setActiveImageIndex(
              (i) => (i! + 1) % currentImages.length
            )
          }
        />
      )}
    </>
  );
}