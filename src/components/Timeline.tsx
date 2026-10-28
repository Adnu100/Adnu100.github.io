import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "../assets/styles/Timeline.scss";

const logos: Record<string, { src: string; zoom: number }> = {
  Nokia: { src: require("../assets/images/nokia.png"), zoom: 1.3 },
  Mastercard: { src: require("../assets/images/mastercard.png"), zoom: 1.4 },
};

const jobs = [
  {
    company: "Nokia",
    role: "SQA Engineer Coop",
    date: "May 2026 - Current",
    place: "Sunnyvale, CA",
    current: true,
    points: [
      "Working on pyshl, Nokia's large-scale pytest automation framework for SR Linux carrier-grade routers.",
      "Enhanced a Cursor skill for test execution on local Docker DUT topologies with multi-setup detection, so it selects the correct environment.",
      "Added topology and sub-topology validation before runs, preventing mismatched executions and redundant LLM failure investigations, saving engineering time and tokens.",
      "Built a new Cursor skill to run pyshl tests on remote testbeds: automated code sync, execution, post-run summary, and SSH-based failure investigation.",
      "Designed and implemented an MT test suite for subinterface existence detection in the SR Linux VLAN detection module.",
    ],
    tags: ["Python", "pytest", "Docker", "Cursor", "SR Linux"],
  },
  {
    company: "Mastercard",
    role: "Software Engineer II",
    date: "Mar 2023 - Aug 2025",
    place: "Pune, India",
    points: [
      "Built a reporting application on Mastercard's event framework that generates events from database changes.",
      "Modernized legacy Java Spring Batch modules, moving them off the mainframe to cloud and VM platforms.",
      "Increased spend-qualification batch performance by 50% using multi-threaded parallel processing.",
      "Created a Spring Boot service exposing encryption, decryption and hash APIs for Cryptography as a Service, achieving 4500 TPS.",
      "Owned the full lifecycle from development to production using Jenkins CI/CD pipelines.",
    ],
    tags: ["Java", "Spring Boot", "Spring Batch", "Jenkins", "Cloud"],
  },
  {
    company: "Mastercard",
    role: "Software Engineer I",
    date: "Jul 2021 - Feb 2023",
    place: "Pune, India",
    points: [
      "Built a Spring Boot application from scratch for customer file upload, download and search, plus report delivery, and ran it from development to production.",
      "Added chunked upload and download APIs, significantly reducing file transfer failures.",
      "Created a real-time dashboard of batch job and LRM status (Angular frontend, Spring Boot backend).",
      "Optimized SQL queries in Spring Batch modules, improving batch performance by 30%.",
    ],
    tags: ["Spring Boot", "Angular", "Spring Batch", "SQL"],
  },
  {
    company: "Mastercard",
    role: "Intern",
    date: "May 2020 - Jun 2020",
    place: "Pune, India",
    points: [
      "Designed a chatbot for the Mastercard website using Python RASA and Angular, focusing on intent classification.",
      "Deployed it on the Mastercard Careers page to help visitors navigate the site.",
    ],
    tags: ["Python", "RASA", "Angular"],
  },
];

function Timeline() {
  return (
    <section className="section" id="history">
      <SectionHead eyebrow="Where I've worked" title="Experience" />
      <ol className="timeline">
        {jobs.map((job) => (
          <li key={job.role + job.date}>
            <Reveal delay={0.05}>
              <span className={`dot${job.current ? " current" : ""}`} />
              <div className="card job">
                <div className="job-head">
                  <div className="job-title">
                    <span className="logo">
                      <img
                        src={logos[job.company].src}
                        alt={`${job.company} logo`}
                        style={{ transform: `scale(${logos[job.company].zoom})` }}
                      />
                    </span>
                    <div>
                      <h3>{job.role}</h3>
                      <h4>
                        {job.company}
                        {job.current && <em>Current</em>}
                      </h4>
                    </div>
                  </div>
                  <div className="job-meta">
                    <span>{job.date}</span>
                    <span>{job.place}</span>
                  </div>
                </div>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="chip-row">
                  {job.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Timeline;
