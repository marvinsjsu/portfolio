const lightClass = 'light';
const darkClass = 'dark';
const activeClass = 'active';
const darkHeaderPos = 58;
const lightHeaderPos = 45;

const links = {
  home: 'home',
  about: 'about',
  projects: 'projects',
};

const navEl = document.getElementById('nav');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');

const homeLink = document.querySelector('a.home');
const aboutLink = document.querySelector('a.about');
const projectsLink = document.querySelector('a.projects');

const activateLink = (linkName) => {
  homeLink.classList.remove(activeClass);
  aboutLink.classList.remove(activeClass);
  projectsLink.classList.remove(activeClass);

  switch(linkName) {
    case links.home: {
      homeLink.classList.add(activeClass);
      break;
    }
    case links.about: {
      aboutLink.classList.add(activeClass);
      break;
    }
    case links.projects: {
      projectsLink.classList.add(activeClass);
      break;
    }
  }
}

window.onload = () => {

  const homeSectionHeight = homeSection.offsetHeight;
  const aboutSectionHeight = aboutSection.offsetHeight;
  const projectsSectionHeight = projectsSection.offsetHeight;

  window.addEventListener('scroll', () => {

    if (window.scrollY < homeSectionHeight) {
      activateLink(links.home);
    }

    if (window.scrollY >= homeSectionHeight && window.scrollY < aboutSectionHeight) {
      activateLink(links.about);
    }

    if (window.scrollY >= aboutSectionHeight && window.scrollY < projectsSectionHeight) {
      activateLink(links.projects);
    }

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