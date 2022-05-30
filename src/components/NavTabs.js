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
            <a href="#about_me" onClick={() => handlePageChange("About")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
            Portfolio
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
