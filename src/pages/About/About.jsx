import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="img3.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="img4.png" alt="" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
            Hi! I'm <b>Vivek Suman</b>, an MCA (AI & IoT) student at <b>NIT Patna</b> who enjoys building software that combines elegant design with intelligent functionality.
          </p>
          <p>
            My interests span <b>Software Engineering, Machine Learning, Artificial Intelligence, and Full-Stack Development</b>. I enjoy solving real-world problems through clean code, efficient algorithms, and user-focused applications. Over time, I've built projects ranging from AI-powered recommendation systems and spam email detection to modern React-based web applications.
          </p>
          <p>
            I'm constantly exploring new technologies, strengthening my DSA skills, and challenging myself with projects that help me grow as a developer. My ambition is to build software that is not only technically strong but also delivers meaningful value to people.
          </p>
        </div>

      </div>
      
    </div>
  );
}

export default About;