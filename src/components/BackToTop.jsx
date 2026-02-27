import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";
//import { b } from "motion/react-client";

function BackToTop()  {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    const handleScroll = () => {
      if (!scrollContainer) return;
      setVisible(scrollContainer.scrollTop > 400);
    };

    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.querySelector(".scroll-container");
    const inicioSection = document.getElementById("inicio");
    if (scrollContainer && inicioSection) {
      scrollContainer.scrollTo({
        top: inicioSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Animação: fade e scale
  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Voltar ao início"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.7)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1)'
      }}
    >
      <FaArrowUp/>
    </button>
  );
}

export default BackToTop;
