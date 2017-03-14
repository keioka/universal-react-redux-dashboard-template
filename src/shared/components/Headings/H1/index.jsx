import React, { Component } from 'react'

import {
  h1
} from './style.scss'

export default class H1 extends Component {
  render(){
    return (
      <h1 className={h1}>{this.props.children}</h1>
    )
  }
}