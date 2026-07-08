import "./Project.css";

import img1 from "../../assets/spam_email.png";
import img2 from "../../assets/health&fitness.png";
import img3 from "../../assets/tictactoe.png";
import img4 from "../../assets/aqi.png";
import img5 from "../../assets/portfolio.png";
import img6 from "../../assets/smurf.png";
import img7 from "../../assets/quiz.png";

const projects = [

  {
    title: "AI Spam Email Detection",
    img: img1,
    desc: "Machine learning application that classifies emails as spam or legitimate using intelligent prediction models.",
    skills: ["Python", "Flask", "Scikit-Learn"],
    github: "https://github.com/VivekSumanx17/Spam_Email_Detetection-naive-bayes-and-logistic-reg.-",
    live: "https://spamemaildetetection.vercel.app/"
  },

  {
    title: "Health & Fitness AI Assistant",
    img: img2,
    desc: "AI-powered web application that generates personalized diet and workout plans based on user preferences.",
    skills: ["Python", "Flask", "Gemini AI"],
    github: "https://github.com/VivekSumanx17/Health-and-Fitness-recommendation-system",
    live: "https://healthandfitnessrecommendationsyste.vercel.app/"
  },

  {
    title: "Tic Tac Toe AI",
    img: img3,
    desc: "Interactive Tic Tac Toe game featuring multiplayer mode and an unbeatable AI powered by the Minimax algorithm.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/VivekSumanx17/Tic-Tac-Toe-Game",
    live: "https://tic-tac-toe-game-omega-pink.vercel.app/"
  },

  {
    title: "Air Quality Index Predictor",
    img: img4,
    desc: "Predicts air quality levels using machine learning techniques and environmental pollutant data.",
    skills: ["Python", "Pandas", "Scikit-Learn"],
    github: "https://github.com/VivekSumanx17/Air_quality_index_predictor",
    live: "https://airqualityindexpredictor-kwange4watd2ktsthevfz4.streamlit.app/"
  },
  {
    title: "League of Legends Smurf Detection",
    img: img6,
    desc: "Machine learning application that predicts player skill tiers and detects smurf accounts using early-game match statistics.",
    skills: ["Python", "Streamlit", "Random forest"],
    github: "https://github.com/VivekSumanx17/smurf-detector-on-LoL",
    live: "https://viveksumanx17-smurf-detector-on-lol-streamlit-demo-cp1g6b.streamlit.app/"
  },

  {
    title: "Developer Portfolio",
    img: img5,
    desc: "Responsive React portfolio showcasing projects, technical skills, certifications, and contact information.",
    skills: ["React", "Vite", "EmailJS"],
    github: "https://github.com/VivekSumanx17/Portfolio",
    live: "https://portfolio-zeta-mauve-y8av122bey.vercel.app/"
  },
  {
    title: "Quiz Management System",
    img: img7,
    desc: "Java-based quiz management system with authentication, score tracking, and database integration.",
    skills: ["Java", "Swing", "MySQL"],
    github: "https://github.com/VivekSumanx17/Quiz_System_GUI_based"
    // live: "https://your-live-demo.com"
  }
  

  

];


export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img
              src={project.img}
              alt={project.title}
            />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="project-skills">

                {project.skills.map((skill, i) => (

                    <span key={i} className="skill-tag">
                        {skill}
                    </span>

                ))}

            </div>

            <div className="btns">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>

              {project.live && (

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>

              )}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}
