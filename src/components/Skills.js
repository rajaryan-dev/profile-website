import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
  FaUsers,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C", icon: <FaCode /> },
        { name: "C++", icon: <FaCode /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
      color: "#667eea",
    },
    {
      title: "Frontend Technologies",
      icon: <FaLaptopCode />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
      ],
      color: "#764ba2",
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ],
      color: "#f093fb",
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: [{ name: "MongoDB", icon: <SiMongodb /> }],
      color: "#f5576c",
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
      color: "#4facfe",
    },
    {
      title: "CS Concepts",
      icon: <FaBrain />,
      skills: [
        { name: "Data Structures", icon: <FaCode /> },
        { name: "Algorithms", icon: <FaCode /> },
        { name: "Operating Systems", icon: <FaCode /> },
        { name: "Computer Networks", icon: <FaCode /> },
        { name: "Object Oriented Programming", icon: <FaCode /> },
      ],
      color: "#00f2fe",
    },
    {
      title: "Soft Skills",
      icon: <FaUsers />,
      skills: [
        { name: "Problem Solving", icon: <FaBrain /> },
        { name: "Team Collaboration", icon: <FaUsers /> },
        { name: "Communication", icon: <FaUsers /> },
        { name: "Time Management", icon: <FaCode /> },
      ],
      color: "#667eea",
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              Skills & Expertise
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              My technical skills and competencies
            </p>
          </Col>
        </Row>

        <Row>
          {skillCategories.map((category, index) => (
            <Col lg={6} md={6} className="mb-4" key={index}>
              <Card
                className="skill-category-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card.Body>
                  <div className="category-header">
                    <div
                      className="category-icon"
                      style={{ color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <Card.Title className="category-title">
                      {category.title}
                    </Card.Title>
                  </div>

                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-info">
                          <div className="skill-icon">{skill.icon}</div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="skills-summary" data-aos="fade-up">
              <h3>Always Learning</h3>
              <p>
                I'm constantly expanding my skill set and exploring new
                technologies. Currently focusing on advanced React concepts,
                backend development, and cloud technologies.
              </p>
              <div className="learning-focus">
                <div className="focus-item">
                  <FaReact className="focus-icon" />
                  <span>Advanced React</span>
                </div>
                <div className="focus-item">
                  <FaServer className="focus-icon" />
                  <span>Backend Development</span>
                </div>
                <div className="focus-item">
                  <FaBrain className="focus-icon" />
                  <span>DSA & Problem Solving</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
