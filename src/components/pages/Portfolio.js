import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="workflex">
        <section className="card">
          <div className="card-caption" id="project1">
            <h2>
              <a href="https://ggrove87.github.io/nu-project-1/">
                Quick Movie Lookup
              </a>
            </h2>
            <a href="https://github.com/ggrove87/nu-project-1">repo</a>
          </div>
        </section>
        <section className="card" id="weather">
          <div className="card-caption">
            <h2>
              <a href="https://nearcatch.github.io/nu-hw6-weather-dashboard/">
                Weather Dashboard
              </a>
            </h2>
            <a href="https://github.com/nearcatch/nu-hw6-weather-dashboard">
              repo
            </a>
          </div>
        </section>
        <section className="card" id="schedule">
          <div className="card-caption">
            <h2>
              <a href="https://nearcatch.github.io/nu-hw5-work-day-scheduler/">
                Work Day Scheduler
              </a>
            </h2>
            <a href="https://github.com/nearcatch/nu-hw5-work-day-scheduler">
              repo
            </a>
          </div>
        </section>
        <section className="card" id="quiz">
          <div className="card-caption">
            <h2>
              <a href="https://nearcatch.github.io/nu-hw4-code-quiz/">
                Code Quiz
              </a>
            </h2>
            <a href="https://github.com/nearcatch/nu-hw4-code-quiz">repo</a>
          </div>
        </section>
        <section className="card" id="pw">
          <div className="card-caption">
            <h2>
              <a href="https://nearcatch.github.io/nu-hw-03-password-generator/">
                Password Generator
              </a>
            </h2>
            <a href="https://github.com/nearcatch/nu-hw-03-password-generator">
              repo
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
