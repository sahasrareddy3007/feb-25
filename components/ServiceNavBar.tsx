import React from "react";

export default function ServiceNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            JUICE SALON
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page"
                 href="/Hair">
                  hair style
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Hair">
                  Hair Wash
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Coloring">
                  Coloring hair
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}