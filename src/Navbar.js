import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            {props.heading}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  {props.navheading}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  {props.features}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  {props.nav3}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.defaultProps = {
  navheading: "mohd nadeem",
  features: "my list",
  nav3: "nav3"
};
