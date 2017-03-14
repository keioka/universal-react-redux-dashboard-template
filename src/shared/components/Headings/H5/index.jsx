import React, { Component } from 'react'

import {
  h5
} from './style.scss'

export default class H5 extends Component {
  render(){
    return (
      <h5 className={h5}>{this.props.children}</h5>
    )
  }
}