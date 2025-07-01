const template = document.createElement("template");
template.innerHTML = `
  <style>
    nav {
      position: fixed;
      width: 100%;
        background-color: rgb(255, 255, 255, 0.7);
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
      nav-bar {
        flex: 0 0 96px; /* or your navbar height */
      }

    .logo {
      height: 52px;
    }

    .links {
      display: flex;
      gap: 20px;
    }

    .links a {
      text-decoration: none;
      color: #000;
      font-size: 1.2em;
    }

    .links a.active {
      color: #fff;
      background-color: #2191FB;
      padding: 0.3em 0.4em;
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
      top: 90px;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
    .panel-links li {
      background: #7c7d7d;
      margin: 0.5em 0;
      padding: 1em 0;
      padding-left: 1em;
    }

    .panel-links a {
      color: #fff;
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
      nav {
        padding: 20px 20px;
      }
  }
  </style>

  <nav>
    <a href="/portfolio/">
    <img
    src="assets/favicon-caramel/android-chrome-192x192.png"
    alt="logo"
    class="logo"
    />
    </a>
    <ul class="links">
    <a href="/portfolio/" class="active"><li>home</li></a>
    <a href="/portfolio/about.html"><li>about</li></a>
    <a href="/portfolio/projects.html"><li>projects</li></a>
    <a href="/portfolio/contact.html"><li>contact</li></a>
    </ul>
    <a class="menu"><i class="fa-solid fa-bars"></i></a>
    <div id="panel-menu" class="hidden">
      <ul class="panel-links">
        <a href="/portfolio/"><li>home</li></a>
        <a href="/portfolio/about.html"><li>about</li></a>
        <a href="/portfolio/projects.html"><li>projects</li></a>
        <a href="/portfolio/contact.html"><li>contact</li></a>
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

    // change background color only for projects page base on scrolling
    const isProjectsPage = window.location.pathname.endsWith("/projects.html");
    const isAboutPage = window.location.pathname.endsWith("/about.html");
    const nav = this.querySelector("nav");
    if (isProjectsPage || isAboutPage) {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          nav.style.backgroundColor = "#fff";
        } else {
          nav.style.backgroundColor = "rgba(255,255,255,0.7)";
        }
      };
      window.addEventListener("scroll", handleScroll);
    }
  }
  disconnectedCallback() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
window.customElements.define("nav-bar", NavBar);
