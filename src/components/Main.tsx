import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HouseIcon from "@mui/icons-material/House";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={require("../assets/images/without-background.png")}
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://www.github.com/Adnu100"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/adnesh-dhamangaonkar/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Adnesh Dhamangaonkar</h1>
          <p>Full Stack Software Engineer</p>
          <br />
          <div className="personal_info">
            <p>
              <LocalPhoneIcon />{" "}
              <span className="personal_info phone_number">
                +1 (617) 369-2484
              </span>
            </p>
            <br />
            <p>
              <HouseIcon />{" "}
              <span className="personal_info location">Boston, MA, USA</span>
            </p>
            <br />
            <p>
              <EmailIcon />{" "}
              <span className="personal_info email">
                dhamangaonadnesh@gmail.com
              </span>
            </p>
            <br />
            <p>
              <EmailIcon />{" "}
              <span className="personal_info email">
                dhamangaonkar.a@northeastern.edu
              </span>
            </p>
            <br />
          </div>
          <div className="mobile_social_icons">
            <a
              href="https://www.github.com/Adnu100"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/adnesh-dhamangaonkar/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
