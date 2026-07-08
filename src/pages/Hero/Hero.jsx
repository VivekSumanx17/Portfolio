import { useState } from "react";
import "./Hero.css";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";

export default function Hero() {
  const [mouse, setMouse] = useState({
    x: -200,
    y: -200,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const leave = () => {
    setMouse({
      x: -200,
      y: -200,
    });
  };

  return (
    <div className="hero" id="hero">

      {/* Background Text */}

      <h1 className="heroText">
        Hi! I'm Vivek
      </h1>

      {/* Image */}

      <div
        className="imageContainer"
        onMouseMove={handleMove}
        onMouseLeave={leave}
      >
        <img
          src={img1}
          className="baseImage"
          alt=""
        />

        <img
          src={img2}
          className="hoverImage"
          alt=""
          style={{
            WebkitMaskImage: `radial-gradient(circle 100px at ${mouse.x}px ${mouse.y}px,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,1) 55%,
              rgba(0,0,0,.6) 70%,
              rgba(0,0,0,.2) 85%,
              transparent 100%)`,

            maskImage: `radial-gradient(circle 100px at ${mouse.x}px ${mouse.y}px,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,1) 55%,
              rgba(0,0,0,.6) 70%,
              rgba(0,0,0,.2) 85%,
              transparent 100%)`,
          }}
        />
      </div>

      {/* Buttons */}

      <div className="content">
        <div className="buttn">
          <a href="#contact">Contact</a>
          <a href="#about">About me</a>
        </div>
      </div>

    </div>
  );
}