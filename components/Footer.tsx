export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* LEFT — disclaimer */}
        <div className="footer-left">
          All slides, charts, visuals, except icons, are designed by I. Daraev. All data research and
          analysis performed by I. Daraev.
        </div>

        {/* CENTER — copyright */}
        <div className="footer-center">
          <p>© 2025-2026 | Built with git & Vercel by Iskander Daraev</p>
          <p className="footer-sub">
            This site does not collect information about visitors or use analytics tools
          </p>
        </div>

        {/* RIGHT — socials */}
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/iskdaraev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>

          <a
            href="https://www.behance.net/iskdaraev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <img src="/icons/behance.svg" alt="Behance" />
          </a>
        </div>
      </div>
    </footer>
  );
}
