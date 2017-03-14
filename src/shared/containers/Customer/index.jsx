import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  customer: state.customer,
})

@connect(mapStateToProps)
class Customer extends Component {

  constructor(props) {
    super(props)
  }

  render(){
    const { children, customer } = this.props
    const childrenWithProps = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        ...customer
      })
    })
    console.log(childrenWithProps)
    return (
      <div>
        {childrenWithProps}
      </div>
    )
  }
}

export default Customer