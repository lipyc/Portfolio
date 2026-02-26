import React, { useState } from "react";
import "./Projetos.css";
import { RandomizedTextEffect } from '../components/RandomizedTextEffect'
import academico from "../assets/academico.png";
import portfolio from "../assets/portfolio.png";
import pixelframe from "../assets/Pixel&Frame.png";
import {
  FaTimes,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Projetos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsVisible(1);
      } else {
        setCardsVisible(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Viriatos Scouting",
      description: "Aplicação Web e Mobile para o Académico de Viseu.",
      modalText:
        "Este projeto foi desenvolvido para análise de jogadores, relatórios técnicos e estatísticas avançadas. Inclui dashboards e gestão de utilizadores.",
      tech: ["HTML" , "CSS" , "JavaScript", "React", "Node.js", "PostgreSQL"],
      img: academico,

      buttons: [
        {
          label: "Frontend",
          icon: "github",
          url: "https://github.com/gilgraca/frontendPI4",
        },
        {
          label: "Backend",
          icon: "github",
          url: "https://github.com/gilgraca/backendPI4",
        },
      ],
    },
    {
      title: "Site promocional Viriatos Scouting",
      description:
        "Uma landing page moderna e responsiva para promover o a aplicação Web e Mobile Viriatos Scouting.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: academico,
       buttons: [
        {
          label: "Frontend",
          icon: "github",
          url: "https://github.com/gilgraca/sitepromocional",
        },
      ],
    },
    {
      title: "Portfolio",
      description:
        "Portfolio pessoal moderno e responsivo para mostrar projetos e competências.",
      tech: ["React", "Node.js", "Vite", "JavaScript"],
      img: portfolio,
      buttons: [
        {
          label: "Frontend",
          icon: "github",
          url: "https://github.com/lipyc/Portfolio",
        },
      ],
    },
    {
      title: "Pixel & Frame",
      description:
        "Plataforma web de gestão e divulgação de propostas de emprego",
      modalText:
      "Este projeto consiste numa plataforma web online que faz a ligação entre estudantes/ex-estudantes, empresas, gestores de departamento e um administrador, permitindo a gestão e divulgação de propostas de emprego de forma centralizada. A aplicação comunica diretamente com uma base de dados, garantindo persistência de informação, autenticação de utilizadores e controlo de permissões consoante o perfil.",
      tech: ["React", "Node.js", "Vite", "JavaScript", "PostgreSQL", "HTML", "CSS"],
      img: pixelframe,
      buttons: [
        {
          label: "Frontend&Backend",
          icon: "github",
          url: "https://github.com/lipyc/PI3_2025",
        },
      ],
    },
    // Adicione mais projetos se quiser testar navegação
  ];

  const maxIndex = Math.max(0, projects.length - cardsVisible);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="projetos" id="projetos">
      <h2 className="projetos__title"> <RandomizedTextEffect text="Projetos" /></h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <button
          className="arrow"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{ marginRight: 16 }}
        >
          <FaChevronLeft />
        </button>

        <div className="projetos__grid" style={{ flex: 1 }}>
          {projects
            .slice(currentIndex, currentIndex + cardsVisible)
            .map((project, index) => (
              <div
                key={index + currentIndex}
                className="projeto__card"
                onClick={() => {
                  setSelectedProject(project);
                  setModalOpen(true);
                }}
              >
                <div className="card__image">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="card__content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card__tech">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button
          className="arrow"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          style={{ marginLeft: 16 }}
        >
          <FaChevronRight />
        </button>
      </div>

      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>
              <FaTimes />
            </button>

            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.img} alt={selectedProject.title} />
              </div>

              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.modalText}</p>

                <div className="modal-tech">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="modal-actions">
                  {selectedProject.buttons?.map((btn, i) => {
                    if (btn.type === "disabled") {
                      return (
                        <span key={i} className="modal-btn disabled">
                          {btn.label}
                        </span>
                      );
                    }
                    return (
                      <a
                        key={i}
                        href={btn.url}
                        target="_blank"
                        rel="noreferrer"
                        className="modal-btn"
                      >
                        {btn.icon === "github" && <FaGithub />}
                        {btn.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projetos;
