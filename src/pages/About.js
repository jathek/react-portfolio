import React from "react";
import about_paragraphs from "../data/about_paragraphs";

export default function About() {
  return (
    <section id="about_me">
      <h2>About Me</h2>
      <section id="about_text">
        {about_paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>
    </section>
  );
}
