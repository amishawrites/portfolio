import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
render() {
  return (
    <div id="intro">
      <FractalTree></FractalTree>
      <Typist avgTypingDelay={120}>
        <span className="intro-title">
          {"hi, "}
          <span className="intro-name">{"amisha"}</span>
          {" here."}
        </span>
      </Typist>
      <FadeInSection>
        <div className="intro-subtitle">merging the realms of tech and creativity.</div>
        <div className="intro-desc">
          I'm a software engineer and artist based in Mumbai, India. I have great interest in web development, data engineering, analysis, and everything in between.
        </div>
        <div className="intro-actions">
          <a href="mailto:narvekar.amisha@gmail.com" className="intro-contact">
            <EmailRoundedIcon />
            {"  " + "Say hi!"}
          </a>
          <span className="intro-actions-divider"></span>
          <a href="../assets/resume.pdf" className="intro-resume">
            <span className="resume-text">Resume</span>
            <span className="resume-line"></span>
          </a>
        </div>
      </FadeInSection>
    </div>
  );
}


}

export default Intro;
