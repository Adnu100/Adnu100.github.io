import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a
          href="https://github.com/Adnu100"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/adnesh-dhamangaonkar"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a href="mailto:dhamangaonkar.a@northeastern.edu" aria-label="Email">
          <EmailIcon />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Adnesh Dhamangaonkar</p>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to top ↑
      </button>
    </footer>
  );
}

export default Footer;
