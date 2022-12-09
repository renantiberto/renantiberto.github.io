class SocialButton extends HTMLElement {
  constructor() {
    super();
    this.build();
  }
  
  build() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.styles());
    
    const sectionLinks = this.createSectionLinks();
    const links = this.createLinks();

    links.forEach(link => sectionLinks.appendChild(link));

    shadow.appendChild(sectionLinks);
  }

  createSectionLinks() {
    const links = document.createElement('section');
    links.classList.add('links');
    return links;
  }

  createLinks() {
    const createLink = () => {
      const link = document.createElement('a');
      link.classList.add('btn');
      link.setAttribute('href', '');
      return link;
    }

    return Array.from({ length: 5 }, createLink);
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      .social-btn {

      }

      .links {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin: 30px;
      }

      .btn {
        width: 400px;
        height: 60px;
        border: none;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-decoration: none;
        color: var(--branco);
        transition: .2s ease-in-out;
        font-size: 1rem;
      }
    `
    return style;
  }
}

customElements.define('social-btn', SocialButton);