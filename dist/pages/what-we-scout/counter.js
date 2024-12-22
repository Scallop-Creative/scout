"use strict";
(() => {
  // src/pages/what-we-scout/counter.ts
  var animateNumber = (element, target, duration) => {
    let startTime;
    const initialNumber = 0;
    const easingFunction = (t) => 1 - Math.pow(1 - t, 4);
    const animate = (time) => {
      if (!startTime)
        startTime = time;
      const elapsedTime = time - startTime;
      const t = Math.min(elapsedTime / duration, 1);
      const newValue = initialNumber + (target - initialNumber) * easingFunction(t);
      element.textContent = Math.round(newValue).toString();
      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target.toString();
      }
    };
    requestAnimationFrame(animate);
  };
  var initCounterListener = () => {
    const onIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const finalNumber = parseInt(el.textContent, 10);
          const animDuration = parseInt(el.getAttribute("animiation-duration"), 10) || 2e3;
          animateNumber(el, finalNumber, animDuration);
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
})();
//# sourceMappingURL=counter.js.map
