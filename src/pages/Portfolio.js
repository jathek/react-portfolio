import React from "react";
import Project from "../components/Project";
import projects from "../data/projects"

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="workflex">
        {projects.map(({ name, link, repo, image }, i) => (
          <Project
            key={i}
            name={name}
            link={link}
            repo={repo}
            image={image}
          ></Project>
        ))}
      </div>
    </section>
  );
}
