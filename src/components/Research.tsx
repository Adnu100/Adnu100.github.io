import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import "../assets/styles/Research.scss";

function Research() {
  return (
    <section className="section" id="research">
      <SectionHead eyebrow="Publication" title="Research" />
      <Reveal>
        <div className="card research">
          <div className="chip-row badges">
            <span className="chip">🏆 Best Presentation Award</span>
            <span className="chip">ACM Singapore Chapter</span>
            <span className="chip">Ei Compendex indexed</span>
          </div>
          <h3>
            Secure, Decentralized, Privacy Preserving Machine Learning
            Implementation over Blockchain
          </h3>
          <h4>3rd Blockchain and Internet of Things Conference (BIOTC 2021), Vietnam</h4>
          <p>
            Lead author of a decentralized machine learning framework that lets
            multiple parties train a shared model without exposing raw data. The
            blockchain-based design uses differentially private SGD to protect
            data confidentiality, keeps the model immutable, and removes the
            need for a central server.
          </p>
          <p>
            Proposed the “Within-N” aggregation algorithm, which discards false
            data vectors from malicious nodes and improves robustness and
            accuracy over N-nearest approaches. Implemented as a proof of
            concept with React, Flask, Ganache and Solidity.
          </p>
          <a
            className="read-link"
            href="https://doi.org/10.1145/3475992.3476003"
            target="_blank"
            rel="noreferrer"
          >
            Read the paper <OpenInNewIcon />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default Research;
