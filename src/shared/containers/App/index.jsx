import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  Header,
  Footer,
  Main,
  SideBarLeft,
  SideBarRight,
} from '../../layouts'

import {
  AuthActions,
  ChatActions
} from '../../redux/actions'

import {
  app,
  main
} from './style.scss'

import '!style-loader!css-loader!../../styles/vendor/normalize.css'

const mapStateToProps = ({auth, chat}) => ({
  auth,
  chat
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...AuthActions,
  ...ChatActions
}, dispatch)


@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render(){
    const { children, chat, chatMessageRequest, subscribeChatMessage } = this.props
    return (
      <div id="app" className={app}>
        <Header />
        <main className={main}>
          <SideBarLeft isAdmin={true} />

          <Main>{children}</Main>

          <SideBarRight
            chat={chat}
            chatMessageRequest={chatMessageRequest}
            subscribeChatMessage={subscribeChatMessage} 
          />
        </main>
        <Footer />
      </div>
    )
  }
}
