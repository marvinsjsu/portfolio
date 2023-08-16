const lightClass = 'light';
const darkClass = 'dark';
const darkHeaderPos = 58;
const lightHeaderPos = 45;

const navEl = document.getElementById('nav');

window.onload = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > darkHeaderPos) {
      navEl.classList.remove(lightClass);
      navEl.classList.add(darkClass);
    }
    
    if (window.scrollY < lightHeaderPos) {
      navEl.classList.remove(darkClass);
      navEl.classList.add(lightClass);
    }
  });
}