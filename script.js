document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  window.addEventListener('scroll', () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollY = window.scrollY;

    // scale 1-től 10-ig
    const scale = 1 + (scrollY / maxScroll) * 10;
    root.style.setProperty('--loader-scale', scale);

    // background opacity 0-tól 1-ig
    const opacity = scrollY / maxScroll;
    root.style.setProperty('--bg-opacity', opacity);
  });
});
