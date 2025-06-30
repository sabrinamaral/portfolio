const socialLinksTemplate = document.createElement("template");
socialLinksTemplate.innerHTML = `
  <style>
      @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

    .social {
      display:flex;
      justify-content: center;
      gap: 20px;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 32px;
      background-color: transparent;
    }

    a {
      color: #fff;
    }

    a:hover {
      color: #2191fb !important;
    }

    .social .fa-brands, .fab::before {
    margin-bottom: .8em;
    }

    @media screen and (max-width: 890px) {
      .social {
        bottom: -12px;
      }
    }
    @media screen and (max-width: 780px) {
      .social {
        padding: 0;
        margin: 0;
        bottom: 0;
      }
    }

  </style>
  <footer>
    <ul class="social">
      <li>
        <a href="https://github.com/sabrinamaral" target="_blank">
          <i class="fa-brands fa-github icon"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sabrinamaral/" target="_blank">
          <i class="fa-brands fa-linkedin icon"></i>
        </a>
      </li>
    </ul>
  </footer>
  `;
class SocialLinks extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(socialLinksTemplate.content.cloneNode(true));
    const socialContainer = this.shadowRoot.querySelector(".social");
    const isContactPage = window.location.pathname.endsWith("/contact.html");
    const isIndexPage = window.location.pathname.endsWith("/");

    // Change the footer bg color to black if it's contact page
    if (isContactPage) {
      if (socialContainer) {
        socialContainer.style.backgroundImage = "none";
        socialContainer.style.backgroundColor = "#000";
      }
    }
    // keep the icons color black for all pages but contact page
    if (!isContactPage) {
      socialContainer.querySelectorAll("a").forEach(function (a) {
        a.style.color = "#000";
      });
    }
  }
}

window.customElements.define("social-links", SocialLinks);
