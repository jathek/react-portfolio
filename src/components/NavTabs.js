import React from "react";
import doge from "../images/doge.png";

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <div>
        <img src={doge} alt="an avatar of an orange dog head" />
        <h1>Jason Thekkekara</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="#about_me"
              onClick={() => handlePageChange("About")}
              className={currentPage === "About" ? "glow" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={currentPage === "Portfolio" ? "glow" : ""}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={currentPage === "Resume" ? "glow" : ""}
            >
              Resume
            </a>
          </li>
          {/* <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={currentPage === "Contact" ? "glow" : ""}
            >
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
