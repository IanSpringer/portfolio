import React, { Component } from "react";

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
    var scrollTo = height * .3;
    var array = this.state.workFade;
    console.log(array)
    if(window.scrollY > scrollTo){
      array[0] = "workFade"
      this.setState({workFade: array});
      setTimeout(function() { array[1] = "workFade"; this.setState({workFade: array}); }.bind(this), 200);
      setTimeout(function() { array[2] = "workFade"; this.setState({workFade: array}); }.bind(this), 400);
    }

  }
  render(){
    console.log(document.documentElement.offsetHeight )
    const workFade = this.state.workFade
    return(
      <div className={this.props.className}>
          <h1>Work Porftolio</h1>
          <div className="sites-wrapper portfolio-col">
            <h3>Websites</h3>
              <img className={"site-img site-img " + workFade[0]} src="https://st.hzcdn.com/simgs/d7030bda05c413b9_3-2567/lujoliving.jpg" />
              <img className={"site-two site-img " + workFade[1]} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSq6I94EQcmlpCWa5TnJ3DGbYMPKHc9x2qLRYRcm6U0bBkeiTD7" />
              <img className={"site-three site-img " + workFade[2]} src="http://www.slicedbread.agency/br3adandbutt3r/crh-new/wp-content/themes/medical-clinic/img/new-crh.jpg"/>
          </div>
          <div className="apps-wrapper portfolio-col">
            <h3>Applications</h3>
              <img className="app-img app-img" src="https://st.hzcdn.com/simgs/d7030bda05c413b9_3-2567/lujoliving.jpg" />
              <img className="app-two app-img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSq6I94EQcmlpCWa5TnJ3DGbYMPKHc9x2qLRYRcm6U0bBkeiTD7" />
              <img className="app-three app-img" src="http://www.slicedbread.agency/br3adandbutt3r/crh-new/wp-content/themes/medical-clinic/img/new-crh.jpg"/>
          </div>
      </div>
    )
  }
}
export default Three;
