import "./Sobre.css";
import aboutImg from "../assets/about.jpg";
import ScrollElement from "../components/ScrollElement";
import { RandomizedTextEffect } from "../components/RandomizedTextEffect";

function Sobre() {
  return (
    <section className="sobre">
      {/* TÍTULO */}
      <div className="sobre__header">
        <ScrollElement direction="down">
          <h2>
            <RandomizedTextEffect text="Sobre Mim" />
          </h2>
        </ScrollElement>
      </div>

      {/* GRID PRINCIPAL */}
      <div className="sobre__grid">
        <div className="sobre__image">
          <ScrollElement direction="left">
            <img src={aboutImg} alt="Sobre mim" />
          </ScrollElement>
        </div>

        <div className="sobre__content">
          <ScrollElement direction="right">
            <p>
              O meu nome é Rodrigo, tenho 25 anos e sou de Viseu.
              Sou licenciado em Tecnologias e Design de Multimédia no
              Instituto Politécnico de Viseu.
            </p>

            <p>
              Iniciei a minha jornada profissional como fotógrafo freelancer,
              trabalhando em eventos (casamentos) e ensaios fotográficos.
              Esta experiência aprimorou a minha sensibilidade visual,
              atenção aos detalhes e comunicação com clientes.
            </p>

            <p>
              Valorizo o trabalho em equipa e a colaboração em projetos
              multidisciplinares, focando-me sempre na entrega de soluções
              funcionais, escaláveis e bem estruturadas.
            </p>

                  {/* INTERESSES PESSOAIS */}
      <div className="sobre__interests">
        <h3>Interesses Pessoais</h3>
        <ul>
 <li style={{ "--i": 1 }}>📸 Fotografia</li>
      <li style={{ "--i": 2 }}>🎨 Design Criativo</li>
      <li style={{ "--i": 3 }}>🎵 Música</li>
      <li style={{ "--i": 4 }}>🌍 Viagens e Cultura</li>
      <li style={{ "--i": 5 }}>💻 Exploração de novas tecnologias</li>
        </ul>
      </div>
          </ScrollElement>
        </div>
      </div>

    </section>
  );
}

export default Sobre;