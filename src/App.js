import "./App.css";
import doge from './images/doge.png'
function App() {
  return (
    <>
        <header>
          <div>
            <img
              src={doge}
              alt="an avatar of an orange dog head"
            />
            <h1>Jason Thekkekara</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#about_me">About Me</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#contact_me">Contact Me</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="banner"></div>
        <main>
          <section id="about_me">
            <h2>About Me</h2>
            <p>
              Jason is a full-stack developer at the beginning of his career. He
              is currently attending Northwestern University's Coding Bootcamp.
              His most recent project was creating a weather dashboard to
              display the current and forecasted weather for a requested
              location. He has experience in HTML, CSS, JavaScript, jQuery, and
              API consumption.
            </p>
          </section>
          <section id="work">
            <h2>Work</h2>
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
                  <a href="https://github.com/nearcatch/nu-hw4-code-quiz">
                    repo
                  </a>
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
        </main>
        <footer id="contact_me">
          <h4>Contact Me</h4>
          <section>
            <ul>
              <li>
                <a href="mailto:nearcaught@gmail.com">Email</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jason-thekkekara/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/nearcatch">Github</a>
              </li>
              <li>
                <a href="https://www.dropbox.com/s/kukb8yea4xywdkf/JT20220414.pdf?dl=0">
                  Resume
                </a>
              </li>
            </ul>
          </section>
        </footer>
    </>
  );
}

export default App;
