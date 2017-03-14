import React, { Component } from 'react'

import {
  h3
} from './style.scss'

export default class H3 extends Component {
  render(){
    return (
      <h3 className={h3}>{this.props.children}</h3>
    )
  }
}