import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3,
  FaLocationArrow,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiExpress,
  SiBootstrap,
  SiJavascript,
  SiCss3,
} from "react-icons/si";
import "./Projects.css";
import { RiTailwindCssFill } from "react-icons/ri";
import { WiDayCloudy } from "react-icons/wi";
import { MdOutlinePsychology } from "react-icons/md";

const Projects = () => {
  const projects = [
    {
      title: "Google UI Clone",
      description:
        "A responsive clone of Google's homepage with functional search bar and voice search button. Built with HTML and Tailwind CSS",
      tech: ["HTML", "Tailwind CSS"],
      icons: [<FaHtml5 />, <RiTailwindCssFill />],
      github: "https://github.com/rajaryan2003/google-ui-clone",
      live: "https://google-ui-clone-rajaryan.netlify.app/",
      image:
        "https://images.unsplash.com/photo-1726066012699-1c843dad5fd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Meme Generator App",
      description:
        "A fun meme generator application that allows users to create and share memes using a variety of templates and custom text.",
      tech: ["React", "JavaScript", "CSS"],
      icons: [<FaReact />, <SiJavascript />, <SiCss3 />],
      github: "https://github.com/rajaryan2003/Meme-Generator-App",
      live: "https://rajaryan2003.github.io/Meme-Generator-App",
      image:
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1317&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Rock-Paper & Scissors Game",
      description:
        "A classic Rock Paper Scissors game built with HTML, CSS, and JavaScript. Play against the computer and see who wins!",
      tech: ["HTML", "CSS", "JavaScript"],
      icons: [<FaHtml5 />, <SiCss3 />, <SiJavascript />],
      github: "https://github.com/rajaryan2003/rps-game",
      live: "https://rajaryan-rps-game.netlify.app",
      image:
        "https://plus.unsplash.com/premium_photo-1690479511777-2cfaa9ef8309?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Blogify Website",
      description:
        "A full-stack blog platform with user authentication, CRUD operations, and responsive design. Built with Node.js, Express, and MongoDB.",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      icons: [<FaNodeJs />, <SiExpress />, <FaDatabase />, <FaCode />],
      // github: "#",
      // live: "#",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tic Tac Toe - HTML/CSS/JS",
      description:
        "Classic Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript. Features include game logic, score tracking, and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      icons: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
      github: "https://github.com/rajaryan2003/tic-tac-toe",
      live: "https://raj-aryan-tic-tac-toe.netlify.app",
      image:
        "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "TextUtils - React App",
      description:
        " A React application that provides various text manipulation utilities such as word count, character count and text transformation features.",
      tech: ["React", "JavaScript", "CSS"],
      icons: [<FaReact />, <SiJavascript />, <SiCss3 />],
      // github: "#",
      // live: "#",
      image:
        "https://user-images.githubusercontent.com/79099734/189593798-94357cb9-40ec-45e1-a9ae-78c364a0780f.png",
    },
    {
      title: "Real-Time Weather Forecast App",
      description:
        "A responsive web app that provides real-time weather data based on user search or current location. It uses the WeatherAPI and browser geolocation to fetch live data, with clean UI and modular React components.",

      tech: [
        "React",
        "Javascript",
        "CSS",
        "Context API",
        "WeatherAPI",
        "Geolocation API",
      ],
      icons: [
        <FaReact />,
        <SiJavascript />,
        <FaCss3 />,
        <MdOutlinePsychology />,
        <WiDayCloudy />,
        <FaLocationArrow />,
      ],
      github: "https://github.com/rajaryan2003/weather-app",
      live: "https://weather-app-rajaryan.netlify.app",
      image:
        "https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              My Projects
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Here are some of the projects I've worked on
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="project-image-container">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    className="project-image"
                    alt={project.title}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>

                <Card.Body className="project-body">
                  <Card.Title className="project-title">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>

                  <div className="project-tech">
                    <div className="tech-icons">
                      {project.icons.map((icon, iconIndex) => (
                        <span key={iconIndex} className="tech-icon">
                          {icon}
                        </span>
                      ))}
                    </div>
                    <div className="tech-badges">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} className="tech-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="more-projects" data-aos="fade-up">
              <p className="more-projects-text">
                More projects coming soon! I'm constantly working on new ideas
                and learning new technologies.
              </p>
              <a
                href="https://github.com/rajaryan2003"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-custom"
              >
                View All Projects
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
