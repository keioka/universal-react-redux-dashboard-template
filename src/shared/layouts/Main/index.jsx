import React, { Component } from 'react'

import {
  content,
  contentInner
} from './style.scss'

export default class Main extends Component {
  render(){
    const { children } = this.props
    return (
      <div className={content}>
        <div className={contentInner}>
          {children}
        </div>
      </div>
    )
  }
}


