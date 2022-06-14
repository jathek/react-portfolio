import React from "react";
import about from "../data/about"

export default function About() {
  return (
    <section id="about_me">
      <h2>About Me</h2>
      <p>
        {about}
      </p>
    </section>
  );
}
