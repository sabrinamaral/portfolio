const template = document.createElement("template");
template.innerHTML = `
  <style>
    nav {
      position: fixed;
      width: 100%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 50px;
      z-index: 2;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
      font-family: "Montserrat", sans-serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
    }

    .logo {
      height: 52px;
    }

    .links {
      display: flex;
      gap: 20px;
      list-style: none;
    }

    .links a {
      text-decoration: none;
      color: #000;
      font-size: 1.2em;
    }

    .links a.active {
      color: #fff;
      background-color: #2191FB;
      padding: .4em .7em;
      border-radius: .4em;
      font-weight: 500;
    }

    .menu {
      display: none;
    }
    /* PANEL HAMBURGER MENU */

    .hidden {
      display: none;
    }

    #panel-menu {
      background: #191919;
      position: absolute;
      top: 78px;
      width: 100vw;
      height: 100vh;
    }

    .panel-links li {
      background: #4d4d4d;
      margin: .5em 0;
      padding: 1em 0;
      list-style: none;
    }

    .panel-links li a {
      color: #fff;
      padding-left: 1em;
      text-decoration: none;
      font-weight: 500;
    }

    /* RESPONSIVE */

    @media screen and (max-width: 780px) {
      .links {
        display: none;
      }

      .menu {
        font-size: 2em;
        display: block;
      }
  }

  </style>

  <nav>
    <a href="./index.html">
    <img
    src="assets/favicon-caramel/android-chrome-192x192.png"
    alt="logo"
    class="logo"
    />
    </a>
    <ul class="links">
    <li><a href="/" class="active">home</li></a>
    <li><a href="/about.html">about</li></a>
    <li><a href="/projects.html">projects</li></a>
    <li><a href="/contact.html">contact</li></a>
    </ul>
    <a class="menu"><i class="fa-solid fa-bars"></i></a>
    <div id="panel-menu" class="hidden">
      <ul class="panel-links">
        <li><a href="/">home</li></a>
        <li><a href="./about.html">about</li></a>
        <li><a href="./projects.html">projects</li></a>
        <li><a href="./contact.html">contact</li></a>
      </ul>
      <social-links class="social social-panel"></social-links>
    </div>
  </nav>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();

    this.appendChild(template.content.cloneNode(true));

    // set active class based on URL
    const setActiveLink = () => {
      const currentPath = window.location.pathname;
      const links = this.querySelectorAll(".links a");

      links.forEach((link) => {
        // remove active class for all
        link.classList.remove("active");

        // check if the link's href matches the current path
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
        }
      });
    };
    // Run the function on page load
    setActiveLink();

    // open e close the menu and hide the social links from the panels
    const panel = document.getElementById("panel-menu");
    const socialPanel = document.querySelector(".social-panel");

    const open = () => {
      panel.classList.toggle("hidden");
      socialPanel.classList.toggle("hidden");
    };

    const menu = this.querySelector(".menu");
    menu.addEventListener("click", open);
  }
}
window.customElements.define("nav-bar", NavBar);
