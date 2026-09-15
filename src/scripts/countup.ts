// The site's one deterministic motion: each mockup's hero number counts up once.
//
// Gated on IntersectionObserver because the dark mockup sits in the last section of a very
// long page — fired on load, its animation was always over before anyone scrolled to it.
// Static under reduced-motion: the server-rendered figure is simply left alone.

const els = document.querySelectorAll<HTMLElement>('[data-countup]');

if (els.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const fmt = new Intl.NumberFormat('en-GB');

  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.countup);
    const dur = 900;
    const t0 = performance.now();
    el.textContent = '£0';

    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = '£' + fmt.format(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target); // once only
        run(entry.target as HTMLElement);
      }
    },
    { threshold: 0.6 },
  );

  els.forEach((el) => io.observe(el));
}
