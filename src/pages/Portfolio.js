import React from "react";
import Project from "../components/Project";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="workflex">
        <Project
          projectId="project1"
          projectName="Quick Movie Lookup"
          link="https://ggrove87.github.io/nu-project-1/"
          repo="https://github.com/ggrove87/nu-project-1"
        ></Project>
        <Project
          projectId="weather"
          projectName="Weather Dashboard"
          link="https://nearcatch.github.io/nu-hw6-weather-dashboard/"
          repo="https://github.com/nearcatch/nu-hw6-weather-dashboard"
        ></Project>
        <Project
          projectId="schedule"
          projectName="Work Day Scheduler"
          link="https://nearcatch.github.io/nu-hw5-work-day-scheduler/"
          repo="https://github.com/nearcatch/nu-hw5-work-day-scheduler"
        ></Project>
        <Project
          projectId="quiz"
          projectName=" Code Quiz"
          link="https://nearcatch.github.io/nu-hw4-code-quiz/"
          repo="https://github.com/nearcatch/nu-hw4-code-quiz"
        ></Project>
        <Project
          projectId="pw"
          projectName="Password Generator"
          link="https://nearcatch.github.io/nu-hw-03-password-generator/"
          repo="https://github.com/nearcatch/nu-hw-03-password-generator"
        ></Project>
      </div>
    </section>
  );
}
