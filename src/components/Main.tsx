import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import "../assets/styles/Main.scss";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Adnu100",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adnesh-dhamangaonkar",
    icon: <LinkedInIcon />,
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/dhamangaonadnesh",
    icon: <CodeIcon />,
  },
];

function Main() {
  return (
    <header className="hero" id="about">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="status">
            <i /> MS CS @ Northeastern · SQA Engineer Coop @ Nokia
          </span>
          <h1>
            Hi, I'm <span className="gradient-text">Adnesh Dhamangaonkar</span>
          </h1>
          <p className="tagline">
            Software engineer with 4+ years at Mastercard building Spring Boot
            services and batch systems, now automating test infrastructure for
            carrier-grade routers at Nokia.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="mailto:dhamangaonkar.a@northeastern.edu">
              <EmailIcon /> Get in touch
            </a>
            <a
              className="btn"
              href={`${process.env.PUBLIC_URL}/Adnesh_Dhamangaonkar_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              <DownloadIcon /> Resume
            </a>
            {links.map((l) => (
              <a
                key={l.label}
                className="btn"
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                {l.icon} {l.label}
              </a>
            ))}
          </div>
          <p className="location">
            <PlaceIcon /> Cupertino, CA, USA
          </p>
        </div>
        <div className="hero-photo">
          <div className="ring">
            <img
              src={require("../assets/images/without-background.png")}
              alt="Adnesh Dhamangaonkar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Main;
