import React from "react";

export default class Hero extends React.Component {
  render() {
    return (
      <div id="bg1">
          <div class="container">
            <div class="jumbotron">
              <div class="row info">

                <div class="col-md-9">
                  <h1>Hello!</h1>
                  <p>
                  My name is Andy Alameddine. I'm a computer science student and web developer. This site is where I host all
                  the projects I'm working on.
                  <br/><br/>
                  Languages and Frameworks: <br/>
                  C++, Javascript, MEAN stack, HTML5, CSS3, jQuery, Bootstrap3. <br/><br/>
                  If you'd like to collaborate
                  on a project or if you're an employer looking at this page off my resume, contact me and we'll see what
                  we can do!
                  </p>
                  <button type="button" class="contact-mobile-form btn btn-info" data-toggle="modal" data-target="#contactModal">Contact Me</button>
                  <div id="contactModal" class="modal fade" role="dialog">
                      <div class="modal-dialog">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                                  <h4 class="modal-title">Contact Info:</h4>
                              </div>
                              <div class="modal-body">
                                  <p>Email: andyalam@hotmail.com</p>
                              </div>
                              <div class="modal-footer">
                                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="personal">
                    <div class="">
                      <img class="profile img-responsive" src="static/images/consolesmiley.jpg" alt="consolesmiley" />
                      <div class="external-links">
                        <a class="btn btn-primary github" href="http://www.github.com/andyalam" target="_blank">Github</a>
                        <a class="btn btn-primary instagram" href="http://www.instagram.com/andy.alam" target="_blank">Instagram</a>
                        <a class="btn btn-info btn-contact" data-toggle="modal" data-target="#contactModal">Contact Me</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
