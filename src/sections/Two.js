import React, { Component } from "react"

class Two extends Component{
    constructor(){
    super();
    this.state = {
      fadeUp: "invisible"
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    if(window.scrollY > 500){
      this.setState({fadeUp: "fadeUp"});
      console.log("bam")
    }

  }
  render(){
    return(
      <div className={this.props.className}>
          <div className={'wrapper ' + this.state.fadeUp}>
            <h2><span className="thin-text">ABOUT</span><span className="bold-text">Me</span></h2>
            <p>Hi, I'm Ian. I'm a southern California based web developer and designer. Since graduating from General Assembly's "Web Development Immersive"
             bootcamp in May of 2016, I have worked professionally as a front end focused developer in both agency and freelance settings. I specialize in front end development, CSS animations, Javascript and its many frameworks, eCommerce, SEO, and responsive design.</p>
          </div>

      </div>

    )
  }
}

export default Two;
