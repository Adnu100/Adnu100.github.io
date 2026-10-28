import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "../assets/styles/Expertise.scss";

const groups = [
  {
    title: "Languages",
    items: ["Java", "Python", "C", "C++", "TypeScript", "JavaScript", "Bash", "SQL"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Spring MVC", "Spring Batch", "Flask", "Node.js", "Express.js", "REST APIs", "pytest"],
  },
  {
    title: "Frontend",
    items: ["React", "Angular", "React Native", "Expo", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "IBM DB2", "Oracle DB"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "PCF", "Docker", "Jenkins", "Chef", "Splunk", "Dynatrace", "Git", "Linux"],
  },
  {
    title: "AI-assisted dev",
    items: ["Claude Code", "Cursor", "Agile"],
  },
];

function Expertise() {
  return (
    <section className="section" id="expertise">
      <SectionHead eyebrow="What I work with" title="Expertise" />
      <Reveal>
        <p className="lead">
          Full stack engineer comfortable across Spring Boot backends, Angular
          and React frontends, batch processing, cloud deployment with CI/CD,
          and Python test automation, working in agile teams.
        </p>
      </Reveal>
      <div className="skill-groups">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06}>
            <div className="card skill-group">
              <h3>{g.title}</h3>
              <div className="chip-row">
                {g.items.map((label) => (
                  <span className="chip" key={label}>
                    {label}
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

export default Expertise;
