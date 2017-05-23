import React, { Component } from "react"


class Square extends Component{


  render(){
    return(
      <div onClick={this.props.onClick} className={this.props.className}>
        <div className={"info-wrapper expand" + this.props.expand}>
          {this.props.icon}
          <h3 className={"textfade" + this.props.expand}>{this.props.title}</h3>
          <p className={this.props.seeP}>{this.props.text}</p>
        </div>
      </div>
    )
  }
}
export default Square;
