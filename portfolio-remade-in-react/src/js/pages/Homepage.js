import React from "react";

import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Projects />
      </div>
    )
  }
}
