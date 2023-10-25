import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button type='button'className={`btn ${this.props.btnSize} 
      ${this.props.padding} ${this.props.btn} ${this.props.rounded}
      shadow-sm`}>{this.props.title}</button>   
      
    )
  }
}
