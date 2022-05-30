import React from "react";
export default function Project({ id, name, link, repo, image }) {
  console.log(image)

  return (
    <section
      className="card"
      style={{ background: `center / cover no-repeat url(${image})` }}
    >
      <div className="card-caption">
        <h2>
          <a href={link}>{name}</a>
        </h2>
        <a href={repo}>repo</a>
      </div>
    </section>
  );
}
