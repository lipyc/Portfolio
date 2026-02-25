import { useEffect, useState } from 'react'
import './Header.css'
import logo from '../assets/logo.png'

function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        root: document.querySelector('.scroll-container'), // IMPORTANTE
        threshold: 0.6
      }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className={`header__nav ${open ? 'open' : ''}`}>
        <a href="#inicio" className={active === 'inicio' ? 'active' : ''} onClick={() => { setOpen(false); setActive('inicio'); }}>
          Início
        </a>
        <a href="#sobre" className={active === 'sobre' ? 'active' : ''} onClick={() => { setOpen(false); setActive('sobre'); }}>
          Sobre
        </a>
        <a href="#competencias" className={active === 'competencias' ? 'active' : ''} onClick={() => { setOpen(false); setActive('competencias'); }}>
          Competências
        </a>
        <a href="#projetos"  className={active === 'projetos' ? 'active' : ''} onClick={() => { setOpen(false); setActive('projetos'); }}>
          Projetos
        </a>
        <a href="#contactos" className={active === 'contactos' ? 'active' : ''} onClick={() => { setOpen(false); setActive('contactos'); }}>
          Contactos
        </a>
      </nav>
      <div
        className={`header__burger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </div>
    </header>
  )
}

export default Header
