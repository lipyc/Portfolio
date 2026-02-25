import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import Inicio from './Pages/Inicio'
import Sobre from './Pages/Sobre'
import Competencias from './Pages/Competencias'
import FluidCursor from './components/FluidCursor'
import ShaderBackground from './components/ShaderBackground'
import Projetos from './Pages/Projetos'
import Contactos from './Pages/Contactos';




function App() {
  return (
    <>
      {/* UI global */}
      <Header />
      <FluidCursor />
      <ShaderBackground />

      {/* Scroll principal */}
      <main className="scroll-container">
        <section id="inicio" className="page">
          <Inicio />
        </section>

        <section id="sobre" className="page">
          <Sobre />
        </section>

        <section id="competencias" className="page">
          <Competencias />
        </section>

        <section id="projetos" className="page">
          <Projetos />
        </section>

        <section id="contactos" className="page">
          <Contactos />
        </section>
      </main>
    </>
  );
}





export default App


