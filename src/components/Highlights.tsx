import Reveal from "./Reveal";
import "../assets/styles/Highlights.scss";

const stats = [
  ["4500", "TPS on crypto-service REST APIs"],
  ["50%", "faster spend-qualification batch jobs"],
  ["30%", "faster Spring Batch via SQL tuning"],
  ["3x", "“Expectations Exceeded” (2022-24)"],
];

const awards = [
  "Best Presentation Award, BIOTC 2021",
  "Finalist, Smart India Hackathon",
  "2nd prize, Geek-O-Code national coding competition",
];

function Highlights() {
  return (
    <section className="section highlights" id="highlights">
      <Reveal>
        <div className="stats-grid">
          {stats.map(([value, label]) => (
            <div className="card stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="chip-row awards">
          {awards.map((a) => (
            <span className="chip" key={a}>
              🏆 {a}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Highlights;
