export function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const els = Array.from(document.querySelectorAll('section[data-reveal]'));
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    },
    { root: null, threshold: 0.12 }
  );

  els.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}
