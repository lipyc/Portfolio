import './Competencias.css'
import ScrollElement from '../components/ScrollElement'
import { RandomizedTextEffect } from '../components/RandomizedTextEffect'
// FRONTEND
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"
// BACKEND
import { FaNodeJs } from "react-icons/fa"
// MOBILE
import { SiFlutter } from "react-icons/si"
// BASE DE DADOS
import { SiPostgresql } from "react-icons/si"
// DESIGN
import { FaFigma } from "react-icons/fa"
import { SiAdobeindesign, SiAdobeillustrator, SiAdobephotoshop, SiAdobelightroom } from "react-icons/si"

function Competencias() {
  return (
    <section className="competencias" id="competencias">
      <ScrollElement direction="up">
        <h2 className="competencias__title">
          <RandomizedTextEffect text="Competências" />
        </h2>
      </ScrollElement>
       
      <div className="competencias__grid">

        {/* FRONTEND */}
        <div className="competencias__card">
          <h3>Frontend</h3>
          <div className="competencias__icons">
            <span data-tooltip="HTML"><FaHtml5 /></span>
            <span data-tooltip="CSS"><FaCss3Alt /></span>
            <span data-tooltip="JavaScript"><FaJs /></span>
            <span data-tooltip="React"><FaReact /></span>
          </div>
        </div>

        {/* BACKEND */}
        <div className="competencias__card">
          <h3>Backend</h3>
          <div className="competencias__icons">
            <span data-tooltip="Node.js"><FaNodeJs /></span>
          </div>
        </div>

        {/* MOBILE */}
        <div className="competencias__card">
          <h3>Mobile</h3>
          <div className="competencias__icons">
            <span data-tooltip="Flutter"><SiFlutter /></span>
          </div>
        </div>

        {/* BASE DE DADOS */}
        <div className="competencias__card">
          <h3>Base de Dados</h3>
          <div className="competencias__icons">
            <span data-tooltip="PostgreSQL"><SiPostgresql /></span>
          </div>
        </div>

        {/* DESIGN */}
        <div className="competencias__card">
          <h3>Design</h3>
          <div className="competencias__icons">
            <span data-tooltip="Figma"><FaFigma /></span>
            <span data-tooltip="Adobe InDesign"><SiAdobeindesign /></span>
            <span data-tooltip="Adobe Illustrator"><SiAdobeillustrator /></span>
            <span data-tooltip="Adobe Photoshop"><SiAdobephotoshop /></span>
            <span data-tooltip="Adobe Lightroom"><SiAdobelightroom /></span>
          </div>
        </div>

      </div>
    

    </section>
  )
}

export default Competencias
