import React, { Component } from "react";
import jsLogo from "./js-logo-yellow.png";
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
      text: " If your site or application is not mobile friendly, it won't compete in today's market place. I am very skilled at finding efficient ways to place content so that it fits on all devices.",
      icon: <i className="fa fa-mobile" aria-hidden="true"></i>,
      reduced: false,
      expand: false,
      seeP: false
      },
      {
      id: 2,
      title: "Javascript",
      text: "I can program clean, efficient JS to add functionality to any site or mobile app. I am experienced working with the many JS frameworks including jQuery, Angular, React, and Node.",
      icon: <img className="js-logo" src={jsLogo} />,
      reduced: false,
      expand: false,
      seeP: false
      },
      {
      id: 3,
      title: "Animations",
      text: "Animations can help bring a site to life, giving the user visual cues as to how the site functions. I employ CSS transitions and transformations to highten the visual aesthetic and grab the user's attention.",
      icon: <i className="fa fa-cog" aria-hidden="true"></i>,
      reduced: false,
      expand: false,
      seeP: false
      },
      {
      id: 4,
      title: "Devops",
      text: " I am well trained in deploying sites live, setting up sandbox and staging environments, and using useful command tools such as git, SSH, and FTP.",
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
    console.log(e)
    if((this.state.attrs[e - 1].expand === false) && (this.state.attrs[e - 1].reduced === false)){
      console.log("yay")
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
    }else if(this.state.attrs[e - 1].expand === true){
      console.log("nay")
      this.setState({
        closeActive: "close-not-active",
         attrs: [
        {
        id: 1,
        title: "Responsive Design",
        text: " If your site or application is not mobile friendly, it won't compete in today's market place. I am very skilled at finding efficient ways to place content so that it fits on all devices.",
        icon: <i className="fa fa-mobile" aria-hidden="true"></i>,
        reduced: false,
        expand: false,
        seeP: false
        },
        {
        id: 2,
        title: "Javascript",
        text: "I can program clean, efficient JS to add functionality to any site or mobile app. I am experienced working with the many JS frameworks including jQuery, Angular, React, and Node.",
        icon: <img className="js-logo" src={jsLogo} />,
        reduced: false,
        expand: false,
        seeP: false
        },
        {
        id: 3,
        title: "Animations",
        text: "Animations can help bring a site to life, giving the user visual cues as to how the site functions. I employ CSS transitions and transformations to highten the visual aesthetic and grab the user's attention.",
        icon: <i className="fa fa-cog" aria-hidden="true"></i>,
        reduced: false,
        expand: false,
        seeP: false
        },
        {
        id: 4,
        title: "Devops",
        text: " I am well trained in deploying sites live, setting up sandbox and staging environments, and using useful command tools such as git, SSH, and FTP.",
        icon: <i className="fa fa-cloud" aria-hidden="true"></i>,
        reduced: false,
        expand: false,
        seeP: false
        }
      ]
      })
    }
  }
  handleCloseClick(){
    console.log("hmm")
  }

  render(){
    var attrs = this.state.attrs
    var closeActive = this.state.closeActive
    return(
      <div className={this.props.className}>
        <div className="wrapper parallax">
          <h2><span className="thin-text">MY</span><span className="bold-text">Expertise</span></h2>
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
                expand={obj.expand}
                className={obj.reduced ? "fade-away expert-col expert-col" + myVar: "expert-col exper-col" + myVar} seeP={" seeP" + obj.seeP} />
            }, this)}
          </div>
        </div>
      </div>
    )
  }
}
export default Four;
