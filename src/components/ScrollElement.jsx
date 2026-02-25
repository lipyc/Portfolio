import { useEffect, useRef } from "react";
import "./ScrollElement.css";

export default function ScrollElement({ children, direction = "up" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
          observerInstance.unobserve(el); // 👈 PARA DEFINITIVAMENTE
        }
      },
      {
        threshold: 0.2, // 👈 mais suave (recomendo)
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-element ${direction}`}>
      {children}
    </div>
  );
}