import React, { useState } from "react";
import "./Projetos.css";
import { RandomizedTextEffect } from '../components/RandomizedTextEffect'
import academico from "../assets/academico.png";
import portfolio from "../assets/portfolio.png";
import pixelframe from "../assets/Pixel&Frame.png";
import pavao from "../assets/pavao.jpg";
import caramulo from "../assets/caramulo.jpg";
import blueorange from "../assets/blueorange.jpg";
import rs from "../assets/rs.png";
import malte from "../assets/malte.png";
import {
  FaBehance,
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
    {
      title: "Peacock",
      description:
        "Album de fotografias de um pavão.",
      modalText:
      "Este projeto é um álbum de fotografias de um pavão, onde cada fotografia é apresentada com detalhe.",
      tech: ["Adobe Lightroom", "Adobe Photoshop"],
      img: pavao,
      buttons: [
        {
          //label: "Behance",
          icon: "behance",
          url: "https://www.behance.net/gallery/245182109/Peacock",
        },
      ],
    },
    {
      title: "Caramulo 2k25",
      description:
        "Album de fotografias sobre o evento Caramulo Motorfestival.",
      modalText:
      "Este projeto é um álbum de fotografias sobre o evento Caramulo Motorfestival realizado em 2025, onde cada fotografia é apresentada com detalhe.",
      tech: ["Adobe Lightroom", "Adobe Photoshop"],
      img: caramulo,
      buttons: [
        {
          //label: "Behance",
          icon: "behance",
          url: "https://www.behance.net/gallery/245183035/Caramulo2k25",
        },
      ],
    },
    {
      title: "Blue & Orange",
      description:
        "Album de fotografia urbana.",
      modalText:
      "Este álbum foi editado seguindo a estética Teal and Orange, criando um contraste vibrante e cinematográfico entre tons frios e quentes. Cada fotografia é apresentada com detalhe, destacando a harmonia entre os elementos urbanos e a paleta de cores escolhida.",
      tech: ["Adobe Lightroom", "Adobe Photoshop"],
      img: blueorange,
      buttons: [
        {
          //label: "Behance",
          icon: "behance",
          url: "https://www.behance.net/gallery/245185921/Blue-Orange",
        },
      ],
    },
    {
      title: "RS - Logo Design",
      description:
        "Design de um logotipo pessoal Rodrigo Simões.",
      modalText:
      "Este projeto apresenta um manual de identidade sobre um design de um logotipo pessoal Rodrigo Simões, seguindo uma estética moderna e minimalista. O logotipo combina elementos abstratos num estilo urbano com uma paleta de cores harmoniosa, representando a identidade visual do proprietário.",
      tech: ["Adobe Illustrator", "Figma"],
      img: rs,
      buttons: [
        {
          //label: "Behance",
          icon: "behance",
          url: "https://www.behance.net/gallery/245192491/RS-Logo-Design",
        },
      ],
    },
    {
      title: "Malte Verde - Logo Design",
      description:
        "Design de um logotipo para a marca de bebidas artesanais.",
      modalText:
      "Este projeto apresenta um manual de identidade sobre um design de um logotipo para a marca de bebidas artesanais Malte Verde, seguindo uma estética moderna e minimalista.",
      tech: ["Adobe Illustrator", "Adobe Indesign", "Figma"],
      img: malte,
      buttons: [
        {
          //label: "Behance",
          icon: "behance",
          url: "https://www.behance.net/gallery/235804835/Manual-de-identidade-Malte-Verde",
        },
      ],
    },
    // Adicionar mais projetos se quiser testar navegação
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
                        {btn.icon === "behance" && <FaBehance />}
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
