import "./Contactos.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCopy, FaCheck } from "react-icons/fa";
import { FiMail, FiCopy, FiCheck } from "react-icons/fi";
import ScrollElement from "../components/ScrollElement";

function Contactos() {
  const formRef = useRef();
  const email = "rodrigosamuel8@gmail.com"; // 👈 troca
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");

  // COPY EMAIL
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // SEND EMAIL
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_ipzgplm",
        "template_r7nb35m",
        formRef.current,
        "ttz8jw6MZyLc5FV-F",
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        },
      );
  };

  return (
    <section className="contactos">
      <div className="contactos__grid">
        {/* CARD EMAIL */}

        <ScrollElement direction="left">
          <div className="contactos__card">
            <div className="contactos__email-content">
              <div className="contactos__mail-icon">
                <FiMail />
              </div>
              <span className="contactos__email-text">{email}</span>
              <button className="contactos__copy-btn" onClick={handleCopy}>
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </div>
            {copied && (
              <small className="contactos__copy-feedback">
                Email copiado com sucesso
              </small>
            )}
          </div>
        </ScrollElement>

        {/* FORM */}
        <ScrollElement direction="right">
          <form ref={formRef} className="contactos__form" onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="O teu nome"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="O teu email"
              required
            />
            <input 
            type="text" 
            name="title" 
            placeholder="Assunto" 
            required 
            />
            <textarea 
            name="message" 
            placeholder="A tua mensagem" 
            required 
            />
            <button type="submit">
              {status === "loading" ? "A enviar..." : "Enviar Mensagem"}
            </button>
            {status === "success" && (
              <span className="success">Mensagem enviada com sucesso ✔</span>
            )}
            {status === "error" && (
              <span className="error">Erro ao enviar ❌</span>
            )}
          </form>
        </ScrollElement>
      </div>
    </section>
  );
}

export default Contactos;
