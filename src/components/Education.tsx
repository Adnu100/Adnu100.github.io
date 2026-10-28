import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "../assets/styles/Education.scss";

const schools = [
  {
    degree: "MS in Computer Science",
    school: "Northeastern University, Boston",
    date: "Sep 2025 - May 2027",
    score: "GPA 4 / 4",
    courses: [
      "Programming Design Paradigms",
      "Algorithms",
      "Database Systems",
      "Web Development",
    ],
  },
  {
    degree: "B.Tech in Computer Engineering",
    school: "College of Engineering, Pune",
    date: "Aug 2017 - May 2021",
    score: "CGPA 8.27 / 10",
    courses: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering",
      "Cloud Computing",
      "Artificial Intelligence",
      "Advanced Linux Programming",
    ],
  },
];

function Education() {
  return (
    <section className="section" id="education">
      <SectionHead eyebrow="Where I studied" title="Education" />
      <div className="edu-grid">
        {schools.map((s, i) => (
          <Reveal key={s.degree} delay={i * 0.1}>
            <div className="card edu">
              <span className="score">{s.score}</span>
              <h3>{s.degree}</h3>
              <h4>{s.school}</h4>
              <p className="date">{s.date}</p>
              <span className="label">Relevant coursework</span>
              <div className="chip-row">
                {s.courses.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Education;
