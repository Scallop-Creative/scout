import { CountUp } from "countup.js";

export const initCounterListener = () => {
  const onIntersection = (entries: any[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        console.log("delay", parseInt(el.getAttribute("duration")));

        var countUp = new CountUp(el, el.textContent, {
          duration: parseInt(el.getAttribute("duration")) / 1000,
          suffix: "+",
        });
        countUp.start();

        observer.unobserve(el);
      }
    });
  };

  const observer = new IntersectionObserver(onIntersection);

  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    document.querySelectorAll('[counter-element="number"]').forEach((el) => {
      observer.observe(el);
    });
  });
};
