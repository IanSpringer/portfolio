import React, { Component } from "react";

class One extends Component{
  render(){
    return(
      <div className={this.props.className}>
        <div className="wrapper">
          <div className="text-wrapper">
            <h2>Ian Springer</h2>
            <h4>Development/Design</h4>
          </div>
          <div className="social-wrapper">
            <i className="fa fa-social fa-github" aria-hidden="true"></i>
            <i className="fa fa-social fa-linkedin" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}
export default One;
