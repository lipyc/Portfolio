import { useEffect, useState, useCallback, useRef } from "react";

const lettersAndSymbols = "abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>,";

export function RandomizedTextEffect({ text }) {
  const [animatedText, setAnimatedText] = useState("");
  const ref = useRef(null);

  const getRandomChar = useCallback(
    () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
    []
  );

  const animateText = useCallback(async () => {
    const duration = 50;
    const revealDuration = 80;
    const initialRandomDuration = 300;

    const generateRandomText = () =>
      text
        .split("")
        .map(() => getRandomChar())
        .join("");

    setAnimatedText(generateRandomText());

    const endTime = Date.now() + initialRandomDuration;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, duration));
      setAnimatedText(generateRandomText());
    }

    for (let i = 0; i < text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, revealDuration));
      setAnimatedText((prevText) =>
        text.slice(0, i + 1) +
        prevText
          .slice(i + 1)
          .split("")
          .map(() => getRandomChar())
          .join("")
      );
    }
  }, [text, getRandomChar]);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateText(); // 👈 inicia animação quando entra
        } else {
          setAnimatedText(""); // 👈 reset quando sai
        }
      },
      { threshold: 0.5 } // 👈 50% visível para disparar
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animateText]);

  return (
    <span ref={ref} className="relative inline-block">
      {animatedText}
    </span>
  );
}
