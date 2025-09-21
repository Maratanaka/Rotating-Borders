document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.loader-wrapper');
  let scrollY = 0;

  // scroll esemény csak frissíti az értéket
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });

  function animate() {
    // scale számítása scrollY alapján
    let scale = 1 + scrollY / 500;
    if(scale > 5) scale = 5;

    wrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;

    // folyamatos animáció
    requestAnimationFrame(animate);
  }

  animate(); // indítjuk az animációt
});
