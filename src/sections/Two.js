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
    if(window.scrollY > 350){
      this.setState({fadeUp: "fadeUp"});
      console.log("bam")
    }

  }
  render(){
    return(
      <div className={this.props.className}>
        <div className={'wrapper ' + this.state.fadeUp}>
          <p>Hi, I'm Ian. I make cool stuff for the web. Check out some of my recent work.</p>
      </div>
      </div>

    )
  }
}

export default Two;
