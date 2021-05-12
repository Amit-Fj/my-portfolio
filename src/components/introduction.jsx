import React, { Component } from "react";
import Hello from "./Playground";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul>
              <h1>
                Hi! <br />
                I'm Amit
              </h1>
              <p>
                <a
                  className="btn btn-primary btn-learn"
                  href="https://drive.google.com/file/d/1K7SqcqdwdounrWKzp__NF0iHKstoyruu/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                  <i className="icon-download4" />
                </a>
              </p>

              <li>
                <h1>
                  I am learning to take nice
                  <br /> PHOTOS !!
                </h1>
                <p>
                  <a
                    className="btn btn-primary btn-learn"
                    href="https://www.instagram.com/amit_asish/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View my Photos on Instagram{" "}
                    <i className="icon-briefcase3" />
                  </a>
                </p>
              </li>
              <li>
                <Hello
                  name="Hyundai A-League"
                  message="Have fun playing"
                  minutes={90}
                ></Hello>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
