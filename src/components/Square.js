import React, { Component } from "react"


class Square extends Component{


  render(){
    return(
      <div onClick={this.props.onClick} className={this.props.className}>
        {this.props.icon}
        <h3>{this.props.title}</h3>
        <p className={this.props.seeP}>{this.props.text}</p>
      </div>
    )
  }
}
export default Square;
