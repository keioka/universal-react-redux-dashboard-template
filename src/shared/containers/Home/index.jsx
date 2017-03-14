import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render(){
    const { children } = this.props
    return (
      <div>
        <h1>Home</h1>
        <p><Link to="/users/1">User 1</Link></p>
        <p><Link to="/users/2">User 2</Link></p>
      </div>
    )
  }
}