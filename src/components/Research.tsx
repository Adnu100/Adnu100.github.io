import "@fortawesome/free-regular-svg-icons";
import "../assets/styles/Expertise.scss";

function Research() {
  return (
    <div className="container" id="research">
      <div className="skills-container">
        <h1>My Research</h1>
        <div className="skills-grid">
          <div className="skill">
            <a
              href="https://doi.org/10.1145/3475992.3476003"
              target="_blank"
              rel="noreferrer"
            >
              <h2>
                Secure, Decentralized, Privacy Preserving Machine Learning
                Implementation over Blockchain
              </h2>
              <h4>
                3rd Blockchain and Internet of Things Conference (BIOTC 2021)
              </h4>
              <p>
                I carried out design, implementation, and evaluation of a
                decentralized machine learning framework that enables
                collaborative model training without sharing raw data. The work
                proposes a blockchain-based architecture integrating
                differentially private Stochastic Gradient Descent (SGD) to
                preserve data confidentiality, ensure model immutability, and
                eliminate reliance on a central server.
              </p>
              <p>
                As the lead author, I drove the core technical contributions,
                including the design of a Byzantine-attack-resilient aggregation
                method (the within-N algorithm) that improves robustness and
                model accuracy compared to existing N-nearest approaches. The
                system demonstrates secure gradient aggregation, resistance to
                malicious nodes, and strong empirical performance across
                multiple experimental setups.
              </p>
              <p>
                This research was peer-reviewed and published at an
                international ACM conference, contributing to the intersection
                of blockchain, distributed systems, and privacy-preserving
                machine learning.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
