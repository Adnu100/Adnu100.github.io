import { useState, useEffect } from "react";
import {
  Main,
  Highlights,
  Timeline,
  Expertise,
  Research,
  Education,
  Project,
  Navigation,
  Footer,
} from "./components";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <Main />
      <Highlights />
      <Expertise />
      <Timeline />
      <Research />
      <Education />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
