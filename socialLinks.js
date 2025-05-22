const socialLinksTemplate = document.createElement("template");
socialLinksTemplate.innerHTML = `
  <style>
      @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

    .social {
      display:flex;
      gap: 20px;
      position: fixed;
      bottom: 0;
      left: 47%;
      list-style: none;
      font-size: 32px;
      background-color: transparent;
      padding: 0;
    }

    .social li a {
      color: #2191FB;
    }

    .social li a:hover {
      color: grey;
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
  `;

class SocialLinks extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(socialLinksTemplate.content.cloneNode(true));
  }
}

window.customElements.define("social-links", SocialLinks);
