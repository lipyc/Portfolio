import './Inicio.css'
import me from '../assets/me.jpg'
import ScrollElement from '../components/ScrollElement'
import { RandomizedTextEffect } from '../components/RandomizedTextEffect'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="inicio__content">
        <ScrollElement direction="up">
          <h1>
            Olá, o meu nome é{" "}
            <span>
              <RandomizedTextEffect text="Rodrigo Simões" />
            </span>
          </h1>
        </ScrollElement>

        <ScrollElement direction="down">
          <p className="scroll-text">
            Web Developer • Graphics Designer • Photographer
          </p>
        </ScrollElement>
      </div>

  <div className="inicio__image">
  <ScrollElement direction="down">
    <div className="avatar-container">
      <img src={me} alt="Foto pessoal" />
      <div className='social-icons'>
      <a
        className="orb orb-github"
        href="https://github.com/lipyc"
        target="_blank"
        rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a
        className="orb orb-linkedin"
        href="https://www.linkedin.com/in/rodrigo-ssim%C3%B5es/"
        target="_blank"
        rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
      <a
        className="orb orb-instagram"
        href="https://www.instagram.com/rodrigos.raw/"
        target="_blank"
        rel="noopener noreferrer">
        <FaInstagram />
      </a>
      </div>
    </div>
  </ScrollElement>
</div>
    </section>
  )
}

export default Inicio