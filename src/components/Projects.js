import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      Spotify: {
        title: "Spotify End-to-End Pipeline",
        desc:
          "Created ETL pipeline for Spotify's top 100 artists monthly insights.",
        techStack: "AWS , Python , Spotify Api",
        link: "https://github.com/amishawrites/spotify-etl-pipeline",
        open:
          "https://drive.google.com/file/d/14-h20qTmsXk5eTaAw5a7PUw9xVSjkALE/view?usp=sharing",
        image: "/assets/1.gif",
      },
      "Youtube Data Analysis": {
        title: "Youtube Data Analysis",
        desc:
          "Managing, streamlining, and analyzing structured and semi-structured YouTube videos, the pipeline empowers business professionals to make data driven decisions",
        techStack: "AWS , Python , SQL , Quicksight",
        link: "https://github.com/amishawrites/youtube-data-analysis",
        open:
          "https://medium.com/@narvekar.amisha/effortlessly-analyze-your-youtube-data-with-aws-a-step-by-step-guide-to-etl-pipeline-using-glue-f98caed05977",
        image: "/assets/2.gif",
      },
      Langverse: {
        title: "Langverse",
        desc: "Language Learning App for Finnish, Spanish, French",
        techStack: "Kotlin , RoomDatabase , Soundpool , Lottie files",
        link: "https://github.com/amishawrites/langverse",
        open:
          "https://drive.google.com/file/d/1Tw_e0_P5RxX39UNuox54G5Nm2UV7jhaY/view?usp=sharing",
        image: "/assets/3.gif",
      },
      "Go Travel": {
        title: "Go Travel",
        desc:
          "A Travel Guidance App to keep users up-to-date on restaurants, hotels, and places of interest in unfamiliar cities.",
        techStack:
          "React Native , Javascript , React Navigation , Expo , Axios",
        link: "https://github.com/amishawrites/go-travel-app",
        open:
          "https://drive.google.com/file/d/1TuLZaZtEArXi3lJrJzwob-VHtPLEVc0W/view?usp=sharing",
        image: "/assets/4.gif",
      },
    };
    const projects = {
        "YouTube Data Analysis": {
        desc: "The pipeline enables data-driven decisions by managing, streamlining, and analyzing structured and semi-structured YouTube videos.",
        techStack: "AWS , Python , SQL , Quicksight",
        link: "https://github.com/amishawrites/youtube-data-analysis",
        open: "https://medium.com/@narvekar.amisha/effortlessly-analyze-your-youtube-data-with-aws-a-step-by-step-guide-to-etl-pipeline-using-glue-f98caed05977",
      },
      Langverse: {
        desc: "Language Learning App for Finnish, Spanish, French",
        techStack: "Kotlin , RoomDatabase , Soundpool , Lottie files",
        link: "https://github.com/amishawrites/langverse",
        open: "https://drive.google.com/file/d/1Tw_e0_P5RxX39UNuox54G5Nm2UV7jhaY/view?usp=sharing",
      },
      "Go Travel": {
        desc: "A Travel Guidance App to keep users up-to-date on restaurants, hotels, and places of interest in unfamiliar cities.",
        techStack: "React Native , Javascript , React Navigation , Expo , Axios",
        link: "https://github.com/amishawrites/go-travel-app",
        open: "https://drive.google.com/file/d/1TuLZaZtEArXi3lJrJzwob-VHtPLEVc0W/view?usp=sharing",
      }, 
      Balance: {
        desc:
          "Mental Health Website to connect users to therapists in their city along with fun activities like personality checker",
        techStack: "Html, CSS, Javascript, Php",
        link: "https://github.com/amishawrites/mental-health-website",
        open: "",
      },
      Portfolio: {
        desc: "Built a personal portfolio website",
        techStack: "React",
        link: "https://github.com/amishawrites/portfolio",
        open: "",
      },
      "Tic-Tac-Toe": {
        desc: " Tic-Tac-Toe game with MinMax Algorithm",
        techStack: "Html, CSS, Javascript",
        link: "https://github.com/amishawrites/tic-tac-toe",
        open: "https://amishawrites.github.io/tic-tac-toe/",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
