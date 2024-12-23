export const animateNumber = (
  element: HTMLElement,
  target: number,
  duration: number
) => {
  let startTime: number;
  const initialNumber = 0;

  const easingFunction = (t: number) => 1 - Math.pow(1 - t, 4);

  const animate = (time: number) => {
    if (!startTime) startTime = time;
    const elapsedTime = time - startTime;
    const t = Math.min(elapsedTime / duration, 1);
    const newValue =
      initialNumber + (target - initialNumber) * easingFunction(t);

    element.textContent = Math.round(newValue).toString();

    if (elapsedTime < duration) {
      requestAnimationFrame(animate);
    } else {
      element.textContent = target.toString();
    }
  };

  requestAnimationFrame(animate);
};

export const initCounterListener = () => {
  const onIntersection = (entries: any[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const finalNumber = parseInt(el.textContent, 10);
        const animDuration =
          parseInt(el.getAttribute("animiation-duration"), 10) || 2000;

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
