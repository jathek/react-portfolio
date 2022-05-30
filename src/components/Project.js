import React from "react";

export default function Project({projectId, projectName, link, repo}) {
  return (
    <section className="card" id={projectId}>
    <div className="card-caption">
      <h2>
        <a href={link}>
          {projectName}
        </a>
      </h2>
      <a href={repo}>repo</a>
    </div>
  </section>
  );
}
