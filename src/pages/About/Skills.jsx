import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaNodeJs,
  FaFigma
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase, 
  SiFlask
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-header">

        <h2 className="skills-title">
            Tech Stack
        </h2>

        <p className="skills-subtitle">
            Technologies & Tools I work with
        </p>

      </div>

      <div className="bento-grid">

        <div className="bento-card large">
          <h3>Frontend</h3>

          <div className="icons">
            <span><FaReact /> React</span>
            <span><FaHtml5 /> HTML5</span>
            <span><FaCss3Alt /> CSS3</span>
            <span><FaJs /> JavaScript</span>
            <span><SiTailwindcss /> Tailwind</span>
          </div>
        </div>

        <div className="bento-card">
          <h3>Languages</h3>

          <div className="icons">
            <span><FaJava /> Java</span>
            <span><FaPython /> Python</span>
          </div>
        </div>

        <div className="bento-card">
          <h3>Backend</h3>

          <div className="icons">
            <span><FaNodeJs /> Node.js</span>
            <span><SiExpress /> Express</span>
            <span><SiFlask /> Flask</span>
          </div>
        </div>

        <div className="bento-card">
          <h3>Database</h3>

          <div className="icons">
            <span><SiMysql /> MySQL</span>
            <span><SiMongodb /> MongoDB</span>
            <span><SiFirebase /> Firebase</span>
          </div>
        </div>

        <div className="bento-card large">
          <h3>Tools</h3>

          <div className="icons">
            <span><FaGitAlt /> Git</span>
            <span><FaGithub /> GitHub</span>
            <span><FaFigma /> Figma</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;