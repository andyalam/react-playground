import React from "react";

export default class Project extends React.Component {
  render() {
    const { info } = this.props;

    return (
      <div class="col-sm-4">
          <h3>{info.title}</h3>
          <div class="img-box img-responsive">
            <div class="overlay">
              <a href="{info.linkGithub}" target="_blank">
                <i class="fa fa-folder-open" aria-hidden="true"></i>
              </a>
              <a href="{info.linkDemo}" target="_blank">
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <h4>{info.techStackUsed}</h4>
          <a href="{info.linkGithub}" target="_blank"><h5>Github repository</h5></a>
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
