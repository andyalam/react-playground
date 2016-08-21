import React from "react";
import Project from "./Project";

export default class Projects extends React.Component {
  render() {
    const projectList = [
      {
        title: "Loc8r",
        description: "I'm currently going through a MEAN stack book, using it to develop a web app where users are able to add locations, submit reviews, leave comments, and share their favorite locations.",
        techStackUsed: "MEAN(MongoDB, Express, AngularJS, Node)",
        linkGithub: "https://github.com/andyalam/loc8r",
        linkDemo: "",
      },
      {
        title: "JS Calculator",
        description: "A calculator that uses the JS engine to perform calculations.",
        techStackUsed: "Javascript",
        linkGithub: "https://github.com/andyalam/JS-calculator",
        linkDemo: "http://andyalam.com/jscalc/jscalc.html",
      },
      {
        title: "Weather App",
        description: "A simple weather app that demonstrates the power of API calls. It displays the current weather as well as a 5-day forecast./n/nPlease note that the API used is openweathermap. It is inaccurate depending on your location.",
        techStackUsed: "Javascript",
        linkGithub: "https://github.com/andyalam/weather-app",
        linkDemo: "http://andyalam.com/weatherapp/weatherapp.html",
      },
      {
        title: "Stars Near Earth",
        description: "Console program that displays the 100 nearest stars to earth. It projects XY and YZ planes.<br>Future implementation(s): -Add GUI interface instead of XY/YZ planes.",
        techStackUsed: "C++",
        linkGithub: "https://github.com/andyalam/nearby-stars",
        linkDemo: "",
      },
      {
        title: "Sorting Timer",
        description: "Console program that allows the user to choose from several different sorting/searching algorithms of different sample sizes and returns their timing.",
        techStackUsed: "C++",
        linkGithub: "https://github.com/andyalam/sorting-timing-app",
        linkDemo: "",
      },
      {
        title: "Quote Machine",
        description: "A button is pressed and the user is given a random quote. There is also a tweet button if the user wants to share the quote.",
        techStackUsed: "Javascript",
        linkGithub: "https://github.com/andyalam/random-quote-machine",
        linkDemo: "http://andyalam.com/quotemachine/quotemachine.html",
      },
    ].map((project, key) => <Project info={project} key={key}/>);

    return (
      <div id="bg2">
          <div class="container">
              <div class="holder"><a class="dummy-link" name="projects"></a></div>
              <h1>Projects</h1>
              <div class="row">
                {projectList}
              </div>
          </div>
      </div>
    );
  }
}
