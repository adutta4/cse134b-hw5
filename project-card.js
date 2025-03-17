class ProjectCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // const currentDate = new Date();

    const projName = this.getAttribute('project-name') || 'Unknown Project Name';
    const description = this.getAttribute('description') || 'Unknown Project Description';
    const imageUrl = this.getAttribute('image') || '';
    const secImgUrl = this.getAttribute('secondary-image') || '';
    const imageDesc = this.getAttribute('image-description') || 'Image not found';
    const extraLink = this.getAttribute('extra-link') || '';
    const linkName = this.getAttribute('link-name') || 'Link not available';

    this.innerHTML = `
        <div class="project-card">
          <h3>${projName}</h3>
          <p>${description}</p>
          <picture>
                <source media="(max-width: 650px)" srcset=${secImgUrl}>
                <source media="(min-width: 651px)" srcset="${imageUrl}">
                <img src="${imageUrl}" alt=${imageDesc}>
            </picture>
            <p>Further reading: <a href=${extraLink} target="_blank">${linkName}</a></p>
        </div>
        `;
  }
}

customElements.define('project-card', ProjectCard);