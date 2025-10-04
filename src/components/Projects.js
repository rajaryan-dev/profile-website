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
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tic Tac Toe - HTML/CSS/JS",
      description:
        "Classic Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript. Features include game logic, score tracking, and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      icons: [<FaCode />, <FaCode />, <FaCode />],
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tic Tac Toe - React",
      description:
        "Modern Tic Tac Toe game built with React. Includes game state management, player turns, win detection, and game reset functionality.",
      tech: ["React", "JavaScript", "CSS"],
      icons: [<FaReact />, <FaCode />, <FaCode />],
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Bootstrap. Features smooth animations, dark/light mode, and mobile-first design.",
      tech: ["React", "Bootstrap", "CSS"],
      icons: [<FaReact />, <SiBootstrap />, <FaCode />],
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
