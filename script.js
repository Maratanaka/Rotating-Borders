document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.loader-wrapper');

  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let scale = 1 + scrollY / 500;
    if(scale > 5) scale = 5;

    wrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
  });
});

