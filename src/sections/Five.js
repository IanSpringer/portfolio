import React, { Component } from "react";

class Five extends Component{
  render(){
    return(
      <div className={this.props.className}>
        <div className="wrapper">
          <h2><span className="bold-text">Get</span><br className="mobile-break" /><span className="thin-text">IN</span><br className="mobile-break" /><span className="bold-text">touch</span></h2>
          <div className="contact-col">
            <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:ianspringer12@gmail.com">ianspringer12@gmail.com</a></li>
            <li><i className="fa fa-mobile" aria-hidden="true"></i><a href="tel:7087908382">(708)-790-8382</a></li>
            <li><i className="fa fa-github" aria-hidden="true"></i><a href="github.com/ianspringer">Github</a></li>
            <li><i className="fa fa-linkedin" aria-hidden="true"></i><a href="linkedin.com/in/ianspringer">Linkedin</a></li>
          </div>
        </div>
      </div>
    )
  }
}
export default Five
