import React, { Component } from "react";
import Hairtamin from "../hairtamin-portfolio.png";
import Stick from "../man-and-bubble.jpg"
import rr from "../rr-portfolio.png"


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
    var scrollToApps = height * .54;
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
      <div className="wrapper three">
          <h1>Work Porftolio</h1>
          <div className="sites-wrapper portfolio-col">
            <h3>Websites</h3>
              <a href="https://www.lujoliving.com/"><img className={"site-img site-img " + workFade[0]} src="https://st.hzcdn.com/simgs/d7030bda05c413b9_3-2567/lujoliving.jpg" /></a>
              <a href="https://tempus-wood-watches.com/?gclid=Cj0KEQjwxPbHBRCdxJLF3qen3dYBEiQAMRyxSxYAVpIKu0W_bTAHL-OEIjcdaMc2ecWR3h4gqSoUZUUaAt2g8P8HAQ"><img className={"site-two site-img " + workFade[1]} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSq6I94EQcmlpCWa5TnJ3DGbYMPKHc9x2qLRYRcm6U0bBkeiTD7" /></a>
              <a href="http://crhivf.com"><img className={"site-three site-img " + workFade[2]} src="http://www.slicedbread.agency/br3adandbutt3r/crh-new/wp-content/themes/medical-clinic/img/new-crh.jpg"/></a>
              <a href="http://hairtamin.com"><img className={"site-four site-img " + workFade[3]} src={Hairtamin}/></a>
          </div>
          <div className="apps-wrapper portfolio-col">
            <h3>Applications</h3>
              <a href="http://stick2it.org"><img className={"app-img app-img " + workFade[4]} src={Stick} /></a>
              <a href="http://roomerresume.com"><img className={"app-img app-img " + workFade[5]} src={rr} /></a>
          </div>
      </div>
    )
  }
}
export default Three;
