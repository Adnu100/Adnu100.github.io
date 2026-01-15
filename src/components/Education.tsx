import "@fortawesome/free-regular-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const coursework1 = [
  "Programming Design Paradigms",
  "Algorithms",
  "Database Systems",
  "Web Development",
];

const coursework2 = [
  "Computer Programming",
  "Data Structures and Algorithms",
  "Database Systems",
  "Computer Networks",
  "Operating Systems",
  "Software Engineering",
  "Cloud Computing",
  "Artificial Intelligence",
  "Advanced Linux Programming",
];

function Education() {
  return (
    <div className="container" id="education">
      <div className="skills-container">
        <h1>Education</h1>
        <div className="skills-grid">
          <div className="skill education">
            <h2>MS in Computer Science</h2>
            <h4>Northeastern University, Boston (Aug 2025 - Current)</h4>
            <h5>GPA: 4 / 4</h5>
            <div className="flex-chips">
              <span className="chip-title">Relevant Coursework:</span>
              {coursework1.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="skills-grid">
          <div className="skill education">
            <h2>B.Tech in Computer Engineering</h2>
            <h4>College of Engineering, Pune (Aug 2017 - May 2021)</h4>
            <h5>CGPA: 8.27 / 10</h5>
            <div className="flex-chips">
              <span className="chip-title">Relevant Coursework:</span>
              {coursework2.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
