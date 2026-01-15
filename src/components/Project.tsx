import "../assets/styles/Project.scss";

interface Project {
  url: string;
  title: string;
  description: string;
}

const projects = [
  {
    url: "https://github.com/Adnu100/AI_with_Maze",
    title: "AI with Maze",
    description:
      "The intention of this project is to provide implementation and understanding of AI algorithms to people. I developed this Python Project as a learning tool for new learners in AI. This project consists of implementation of various search algorithms in Artificial Intelligence like Simple Hill Climbing, Steepest Ascent Hill Climbing, Stimulated Annealing, Breadth First Search etc on maze problem (finding correct path through maze) along with the graphical simulation of sprite in a maze for better understanding all in one place. Also, flexibility to add new mazes and new algorithms is provided. The graphical comparison of the times taken by various algorithms (with Matplotlib and timeit) can also be done using this project. Useful for those who want to learn and are new to AI.",
  },
  {
    url: "https://github.com/sawant-hrishikesh/online-judiciary-system",
    title: "Online Judiciary System",
    description:
      "Worked with a team of 4 to create an online judiciary system in ExpressJS (backend) and ReactJS (frontend) and RTCMulticonnection API (foe video conferencing) for online court cases via video conferencing providing features like storing case files, persons information as well as facial recognition of people joining video conference An online judiciary system in ExpressJS (backend) and ReactJS (frontend) and RTCMulticonnection API (foe video conferencing) for online court cases via video conferencing providing features like storing case files, persons information as well as facial recognition of people joining video conference.",
  },
  {
    url: "https://github.com/Adnu100/Chain-Reaction-Game",
    title: "Chain Reaction Game",
    description:
      "A chain reaction game for Ubuntu as a data structures project in 2nd year - developed in C language with SDL library supporting customizable board size (rows and columns) and unlimited number of human or computer players (difficulty level adjustable), also providing saving and loading of game. Used C language, Shell (Bash) scripting, Makefile etc tools",
  },
  {
    url: "https://github.com/Adnu100/Snake-Game",
    title: "Nokia Snake Game Replica",
    description:
      "Replicated Nokia Snake Game for playing on computer (Ubuntu) with an extra feature of two players at a time and many more features like highscore records, CLI options and increasing difficulty (speed) in C programming language and SDL library. ",
  },
  {
    url: "https://github.com/Adnu100/Petition-Platform-Services-Spring-Boot",
    title: "Petition Platform Services",
    description:
      "Developed backend services for a petition platform using Spring Boot framework. Implemented RESTful APIs for user authentication, petition creation, signing, and commenting functionalities. Utilized Spring JDBC for database interactions and ensured secure data handling.",
  },
  {
    url: "https://github.com/Adnu100",
    title: "More Projects",
    description:
      "Explore more of my projects on my GitHub profile, where I continuously work on various personal and collaborative projects across different technologies and domains.",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project: Project) => (
          <a href={project.url} target="_blank" rel="noreferrer">
            <div className="project zoom">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Project;
