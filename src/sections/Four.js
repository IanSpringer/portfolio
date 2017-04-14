import React, { Component } from "react";

class Four extends Component{
  render(){
    return(
      <div className={this.props.className}>
        <div className="wrapper">
          <h2>Expertise</h2>
          <div className="expert-col expert-col-1">
            <i className="fa fa-mobile" aria-hidden="true"></i>
            <h3>Responsive Design</h3>
            <p>Hell of shabby chic synth hexagon, kogi williamsburg kinfolk. Readymade tumblr PBR&B try-hard scenester, bicycle rights fap forage. </p>
          </div>
          <div className="expert-col expert-col-2">
            <i className="fa fa-code" aria-hidden="true"></i>
            <h3>Custom Code</h3>
            <p>Hell of shabby chic synth hexagon, kogi williamsburg kinfolk. Readymade tumblr PBR&B try-hard scenester, bicycle rights fap forage. </p>
          </div>
          <div className="expert-col expert-col-3">
            <i className="fa fa-cloud" aria-hidden="true"></i>
            <h3>Devops</h3>
            <p>Hell of shabby chic synth hexagon, kogi williamsburg kinfolk. Readymade tumblr PBR&B try-hard scenester, bicycle rights fap forage. </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Four;
