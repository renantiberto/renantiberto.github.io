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
    const listLinks = {
      LinkedIn: {
        title: 'LinkedIn',
        href: 'http://'
      },
      Facebook: {
        title: 'Facebook',
        href: 'http://'
      },
      Github: {
        title: 'Github',
        href: 'http://'
      },
      Instagram: {
        title: 'Instagram',
        href: 'http://'
      },
      Twitter: {
        title: 'Twitter',
        href: 'http://'
      }
    }

    const createLink = (href, title) => {
      const link = document.createElement('a');
      link.classList.add('btn');
      link.setAttribute('href', '#');
      link.setAttribute('title', '#');
      link.setAttribute('target', '_blank');
      return link;
    }

    return Array.from({ length: 5 }, createLink);
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
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