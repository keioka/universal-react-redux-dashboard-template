import React, { Component } from 'react'

export const clickable = (WrrapedComponent) => {
  return class Clickable extends Component {
	  constructor(props) {
      super(props)
    }

    render(){
      return (
      	<WrrapedComponent onClick={this.props.onClick} {...this.props} />
      )
    }
  }
}