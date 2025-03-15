class ProjectCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // HTML and inline style as template literals for easy modification

    // Get current date in JavaScript
    // const currentDate = new Date();

    // Template for component content
    const projName = this.getAttribute('project-name') || 'Unknown Project Name';
    const description = this.getAttribute('description') || 'Unknown Project Description';
    const imageUrl = this.getAttribute('image') || '';
    const imageDesc = this.getAttribute('image-description') || 'Image not found';
    const extraLink = this.getAttribute('extra-link') || '';
    const linkName = this.getAttribute('link-name') || 'Link not available';

    this.innerHTML = `
        <div class="project-card">
          <h3>${projName}</h3>
          <p>${description}</p>
          <picture>
                <img src=${imageUrl} alt=${imageDesc}>
            </picture>
            <p>Further reading: <a href=${extraLink} target="_blank">${linkName}</a></p>
        </div>
        `;
  }
}

function loadFromLocalStorage() {
  const projects = JSON.parse(localStorage.getItem('projects') || '[]');
  return projects;
}


// Define the custom element
customElements.define('project-card', ProjectCard);