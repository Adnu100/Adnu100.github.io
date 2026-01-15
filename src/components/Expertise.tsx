import "@fortawesome/free-regular-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "Bash",
  "Spring Boot",
  "Spring MVC",
  "Spring Batch",
  "Flask",
  "Node.js",
  "Express.js",
  "Angular",
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "SQL",
  "IBM DB2",
  "OracleDB",
  "MySQL",
  "MongoDB",
  "Postman",
  "Linux",
  "AWS",
  "PCF",
  "Jenkins",
  "Splunk",
  "Dynatrace",
  "REST API",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <h3>Full Stack Web Development</h3>
            <p>
              I am a full stack web developer with expertise in different
              frontend technologies like React, Angular and backend technologies
              like Spring Boot, Flask, Express.js. I have experience working
              with databases like MySQL, DB2, OracleDB etc. I also have
              experience working with cloud platforms like AWS and PCF. I can
              deploy applications in a CI/CD environment using tools like
              Jenkins. I am well familiar with working in agile environment.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {skills.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
