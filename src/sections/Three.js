import React, { Component } from "react";
import Hairtamin from "../hairtamin-portfolio.png";
import Stick from "../man-and-bubble.jpg"
import rr from "../rr-portfolio.png"
import roomer from "../roomerresume.png"
import tempus from "../tempus.png"
import lujo from "../lujo-portfolio.png"
import uag from "../UAG.png"

class Three extends Component{
  constructor(){
    super();
    this.state = {
      workFade: Array(8).fill(null),
      docHeight: null
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    this.setState({docHeight: document.documentElement.offsetHeight})
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    var height = this.state.docHeight;
    var scrollToSites = height * .36;
    var scrollToApps = height * .48;
    var array = this.state.workFade;
    console.log(array)
    if(window.scrollY > scrollToSites){
      array[0] = "workFade"
      this.setState({workFade: array});
      setTimeout(function() { array[1] = "workFade"; this.setState({workFade: array}); }.bind(this), 200);
      setTimeout(function() { array[2] = "workFade"; this.setState({workFade: array}); }.bind(this), 400);
      setTimeout(function() { array[3] = "workFade"; this.setState({workFade: array}); }.bind(this), 600);
    }
    if(window.scrollY > scrollToApps){
      array[4] = "workFade"
      setTimeout(function() { array[5] = "workFade"; this.setState({workFade: array}); }.bind(this), 200);
    }

  }
  render(){
    console.log(document.documentElement.offsetHeight )
    const workFade = this.state.workFade
    return(
      <div className="section three">
        <div className="wrapper">
          <h2><span className="thin-text">WORK</span><br className="mobile-break" /><span className="bold-text">Portfolio</span></h2>
          <div className="portfolio-item">
            <img src={roomer} className="roomerresume portfolio-img"/>
            <div className="portfolio-text-wrapper">
              <h3>Roomer Resume</h3>
              <p>Roomer Resume is a mobile application that helps roommates throughout the country connect. Built on an MVC framework, this app allows users to signup, login, post currently available units or search for places to rent. Technologies used include PHP, MySQL, Javascript, Zend.</p>
              <a href="http://roomerresume.com">Go to site</a>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={tempus} className="roomerresume portfolio-img-right portfolio-img portfolio-img-mobile"/>
            <div className="portfolio-text-wrapper text-wrapper-left">
              <h3>Tempus Wood Watches</h3>
              <p className="text-left">Tempus Wood Watches is a website that was built using the popular eCommerce platform Shopify. Displaying a slick and beautiful imagery, Tempus' new site has helped drive more traffic to the company and grow their business. Technologies used include CSS3, Liquid, jQuery</p>
              <a href="http://tempus-wood-watches.com">Go to site</a>
            </div>
            <img src={tempus} className="roomerresume portfolio-img-right portfolio-img portfolio-img-desktop"/>
          </div>
          <div className="portfolio-item">
            <img src={lujo} className="roomerresume portfolio-img"/>
            <div className="portfolio-text-wrapper">
              <h3>Lujo Living</h3>
              <p>Lujo is a luxury furniture store located in New Zealnd. This website, which also utilized the Shopify platform, was inspired by the detailed designs from the client which was translated from Photoshop to the Web for a pixel-perfect experience. Technologies include CSS3, Liquid, jQuery</p>
              <a href="https://www.lujoliving.com/">Go to site</a>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={uag} className="roomerresume portfolio-img-right portfolio-img portfolio-img-mobile"/>
            <div className="portfolio-text-wrapper text-wrapper-left">
              <h3>Urban Armour Gear</h3>
              <p className="text-left">Welcome to Urban Armour Gear, one of the country's most well-known phone and tablet protection companies. Build using Shopify, the rugged and durable feel of the site is both eye-catching yet fully responsive. Technologies used include CSS3, Liquid, jQuery.</p>
              <a href="https://urbanarmorgear.com/">Go to site</a>
            </div>
            <img src={uag} className="roomerresume portfolio-img-right portfolio-img portfolio-img-desktop"/>
          </div>
        </div>
      </div>
    )
  }
}
export default Three;
