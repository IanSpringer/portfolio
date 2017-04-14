import React, { Component } from "react";

class Three extends Component{
  render(){
    return(
      <div className={this.props.className}>
          <div className="sites-wrapper portfolio-col">
            <img className="site-img site-img" src="https://st.hzcdn.com/simgs/d7030bda05c413b9_3-2567/lujoliving.jpg" />
            <img className="site-two site-img" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSq6I94EQcmlpCWa5TnJ3DGbYMPKHc9x2qLRYRcm6U0bBkeiTD7" />
            <img className="site-three site-img" src="http://www.slicedbread.agency/br3adandbutt3r/crh-new/wp-content/themes/medical-clinic/img/new-crh.jpg"/>
          </div>
      </div>
    )
  }
}
export default Three;
