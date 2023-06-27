import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        <p>
          I am currently pursuing Bachelors in <b>Computer Engineering</b> along
          with honors in <b>AI &amp; ML</b> at
          <a href="https://www.xavier.ac.in/">
            {" "}
            Xavier Institute of Engineering
          </a>
          . I am a dedicated worker, creative, data engineering analysis geek,
          with a relentless passion for extracting insights and optimizing
          operations through data-driven solutions.
        </p>
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in Crocheting, Painting and curating
        Playlists.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:narvekar.amisha@gmail.com">narvekar.amisha@gmail.com</a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "SQL",
      "Python",
      "React.js",
      "AWS",
      "Tableau",
      "HTML & CSS",
    ];

    const tech_items = tech_stack.map((stack) => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/pfp.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
