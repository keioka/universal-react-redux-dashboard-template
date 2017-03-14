import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  organization: state.organization,
})

@connect(mapStateToProps)
class Chat extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { children, organization } = this.props
    const childrenWithProps = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        chatHistory: organization.chatHistory,
        pendingSession: organization.pendingSession
      })
    })

    return (
      <div>
        {childrenWithProps}
      </div>
    )
  }
}

export default Chat