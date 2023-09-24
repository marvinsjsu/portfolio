const lightClass = 'light';
const darkClass = 'dark';
const activeClass = 'active';

const links = {
  home: 'home',
  about: 'about',
  projects: 'projects',
};

const navEl = document.getElementById('nav');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');

const aboutLink = document.querySelector('a.about');
const projectsLink = document.querySelector('a.projects');

const activateLink = (linkName) => {
  aboutLink.classList.remove(activeClass);
  projectsLink.classList.remove(activeClass);

  switch (linkName) {
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

(() => {
  const aboutSectionHeight = aboutSection.offsetHeight;
  const projectsSectionHeight = projectsSection.offsetHeight;

  activateLink(links.about);

  window.addEventListener('scroll', () => {

    if (window.scrollY < aboutSectionHeight) {
      activateLink(links.about);
    }

    if (window.scrollY >= aboutSectionHeight && window.scrollY < projectsSectionHeight) {
      activateLink(links.projects);
    }
  });
})();