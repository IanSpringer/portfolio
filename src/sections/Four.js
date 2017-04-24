import React, { Component } from "react";
import jsLogo from "./js-logo-cropped.png";
import Square from "../components/Square.js"

class Four extends Component{
  constructor(){
    super()
    this.state = {
      closeActive: "close-not-active",
      attrs: [
      {
      id: 1,
      title: "Responsive Design",
      text: " clean, efficient JS to add functionality to any site or mobile app. I am experienced working with the many JS frameworks including jQuery, Angular, and React. In fact, this website was built using React!",
      icon: <i className="fa fa-mobile" aria-hidden="true"></i>,
      reduced: false,
      expand: false,
      seeP: false
      },
      {
      id: 2,
      title: "Javascript",
      text: "I can program clean, efficient JS to add functionality to any site or mobile app. I am experienced working with the many JS frameworks including jQuery, Angular, and React. In fact, this website was built using React!",
      icon: <img className="js-logo" src={jsLogo} />,
      reduced: false,
      expand: false,
      seeP: false
      },
      {
      id: 3,
      title: "Animations",
      text: " clean, efficient JS to add functionality to any site or mobile app. I am experienced working with the many JS frameworks including jQuery, Angular, and React. In fact, this website was built using React!",
      icon: <i className="fa fa-cog" aria-hidden="true"></i>,
      reduced: false,
      expand: false,
      seeP: false
      },
      {
      id: 4,
      title: "Devops",
      text: " I am well trained in deploying sites live, setting up sandbox and staging environments, and using version control tools such as git, github, and bitbucket.",
      icon: <i className="fa fa-cloud" aria-hidden="true"></i>,
      reduced: false,
      expand: false,
      seeP: false
      }

    ]
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
  }
  handleClick(e){
    const elements = this.state.attrs
    elements.map(function(element){
      if (element.id === e) {
        element.reduced = false;
        element.expand = true;
        element.seeP = true;
      } else {
        element.reduced = true;
      }
    })
    this.setState({attrs: elements, closeActive: "close-active"})
  }
  handleCloseClick(){
    console.log("clickek")
    this.setState({
      closeActive: "close-not-active",
      attrs: [
      {
      id: 1,
      title: "Responsive Design",
      text: " clean, efficient JS to add functionality to any site or mobile app. I am experienced working with the many JS frameworks including jQuery, Angular, and React. In fact, this website was built using React!",
      icon: <i className="fa fa-mobile" aria-hidden="true"></i>,
      reduced: false,
      expand: false,
      seeP: false
      },
      {
      id: 2,
      title: "Javascript",
      text: "I can program clean, efficient JS to add functionality to any site or mobile app. I am experienced working with the many JS frameworks including jQuery, Angular, and React. In fact, this website was built using React!",
      icon: <img className="js-logo" src={jsLogo} />,
      reduced: false,
      expand: false,
      seeP: false
      },
      {
      id: 3,
      title: "Animations",
      text: " clean, efficient JS to add functionality to any site or mobile app. I am experienced working with the many JS frameworks including jQuery, Angular, and React. In fact, this website was built using React!",
      icon: <i className="fa fa-cog" aria-hidden="true"></i>,
      reduced: false,
      expand: false,
      seeP: false
      },
      {
      id: 4,
      title: "Devops",
      text: " I am well trained in deploying sites live, setting up sandbox and staging environments, and using version control tools such as git, github, and bitbucket.",
      icon: <i className="fa fa-cloud" aria-hidden="true"></i>,
      reduced: false,
      expand: false,
      seeP: false
      }

    ]})
  }

  render(){
    var attrs = this.state.attrs
    var closeActive = this.state.closeActive
    return(
      <div className={this.props.className}>
        <div className="wrapper parallax">
          <h2>Expertise</h2>
          <h5 className={this.state.closeActive} onClick={this.handleCloseClick}>Back</h5>
          <div className="expert-wrapper">
          {attrs.map(function(obj, index){
            var myVar = index + 1;
            return <Square
              key={index}
              onClick={() => this.handleClick(myVar)}
              onCloseClick={this.handleCloseClick}
              title={obj.title}
              text={obj.text}
              icon={obj.icon}
              className={obj.reduced ? "fade-away expert-col expert-col" + myVar: "expert-col exper-col" + myVar + " expand" + obj.expand} seeP={" seeP" + obj.seeP} />
          }, this)}
          </div>
        </div>
      </div>
    )
  }
}
export default Four;
