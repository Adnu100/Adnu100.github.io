import GitHubIcon from "@mui/icons-material/GitHub";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "../assets/styles/Project.scss";

interface ProjectProps {
  url: string;
  title: string;
  description: string;
  tags: string[];
}

const projects: ProjectProps[] = [
  {
    url: "https://github.com/Adnu100/AI_with_Maze",
    title: "AI with Maze",
    description:
      "A learning tool for AI algorithms: A*, BFS, DFS, hill climbing and simulated annealing solving a maze, with a graphical simulation and Matplotlib charts comparing run times. New mazes and algorithms are easy to add.",
    tags: ["Python", "Matplotlib", "AI"],
  },
  {
    url: "https://github.com/sawant-hrishikesh/online-judiciary-system",
    title: "Online Judiciary System",
    description:
      "Smart India Hackathon finalist. Team of 4 building online court hearings with video conferencing, case-file and person records, and facial recognition of participants.",
    tags: ["Express.js", "React", "WebRTC"],
  },
  {
    url: "https://github.com/Adnu100/Petition-Platform-Services-Spring-Boot",
    title: "Petition Platform Services",
    description:
      "Backend services for a petition platform: REST APIs for authentication, creating and signing petitions, and comments, using Spring JDBC with secure data handling.",
    tags: ["Spring Boot", "Spring JDBC", "REST"],
  },
  {
    url: "https://github.com/Adnu100/Chain-Reaction-Game",
    title: "Chain Reaction Game",
    description:
      "A chain reaction board game for Ubuntu with customizable board size, any number of human or computer players with adjustable difficulty, and save/load support.",
    tags: ["C", "SDL2", "Bash", "Make"],
  },
  {
    url: "https://github.com/Adnu100/Snake-Game",
    title: "Nokia Snake Game Replica",
    description:
      "The classic Nokia Snake for the desktop with two-player mode, high scores, CLI options and increasing difficulty.",
    tags: ["C", "SDL2"],
  },
  {
    url: "https://github.com/Adnu100/snake-vs-block",
    title: "Snake vs Block",
    description:
      "A recreation of the Snake vs Block mobile game for PC.",
    tags: ["C++", "SDL2"],
  },
];

function Project() {
  return (
    <section className="section" id="projects">
      <SectionHead eyebrow="Things I've built" title="Projects" />
      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.08}>
            <a
              className="card project"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-top">
                <h3>{project.title}</h3>
                <GitHubIcon />
              </div>
              <p>{project.description}</p>
              <div className="chip-row">
                {project.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="more">
          More on{" "}
          <a href="https://github.com/Adnu100" target="_blank" rel="noreferrer">
            my GitHub profile →
          </a>
        </p>
      </Reveal>
    </section>
  );
}

export default Project;
