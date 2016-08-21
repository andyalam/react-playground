import React from "react";

export default class Project extends React.Component {
  render() {
    const { info } = this.props;

    return (
      <div class="col-sm-4">
          <h3>{info.title}</h3>
          <div class={info.title.toLowerCase().replace(/ /g,'') + " img-box img-responsive"}>
            <div class="overlay">
              { info.linkGithub &&
                <a href={info.linkGithub} target="_blank">
                  <i class="fa fa-folder-open" aria-hidden="true"></i>
                </a> }
              { info.linkDemo &&
                <a href={info.linkDemo} target="_blank">
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a> }
            </div>
          </div>
          <h4>{info.techStackUsed}</h4>
          { info.linkGithub &&
            <a href={info.linkGithub} target="_blank"><h5>Github repository</h5></a> }
          { info.linkDemo &&
            <a href={info.linkDemo} target="_blank"><h5>Demo!</h5></a> }
          <p>{info.description}</p>
      </div>
    )
  }
}


/*
info = {
  title,
  description,
  techStackUsed,
  linkGithub,
  linkDemo,
  imgClassname
}
*/
