import React, { Component } from 'react'

import {
  Textarea,
  BtnPrimarySm,
  BubbleCustomer,
  BubbleOperator
} from '../../components'

import {
  sideBarRight,
  sideBarRightNormal,
  sideBarRightExpand,
  bubble,
  btnExpand,
  btnShrink,
  chatBox,
  sectionForm,
  formChat,
  formChatInner,
  formChatBtn,
  sideBarRightHeader,
  sideBarRightMain,
} from './style.scss'

export default class SideBarRight extends Component {
  constructor(props){
    super(props)
    this.state = {
      isExpand: false
    }
    this.onClickExpand = this.onClickExpand.bind(this)
    this.onClickShrink = this.onClickShrink.bind(this)
    this.onChatMessageSubmitHandler = this.onChatMessageSubmitHandler.bind(this)
  }

  componentDidMount(){
    this.props.subscribeChatMessage(1)
  }

  componentDidUpdate(){
    if (global.window){
      document.getElementsByClassName(sideBarRightMain)[0].scrollTop = 10000;
    }
  }

  onClickExpand(){
    this.setState({
      isExpand: true
    })
  }

  onClickShrink(){
  	this.setState({
      isExpand: false
    })
  }

  onChatMessageSubmitHandler(event){
    event.preventDefault()
    this.props.chatMessageRequest(this.textarea.value)
    this.textarea.value = ''
  }

  render(){
  	const sideBarClassNames = this.state.isExpand ? `${sideBarRight} ${sideBarRightExpand}` : `${sideBarRight} ${sideBarRightNormal}` 
    const chats = this.props.chat.records.map((chat)=> <BubbleOperator>{chat.message}</BubbleOperator>)

    return (
      <aside className={sideBarClassNames}>
        { this.state.isExpand ? 
          <div className={btnShrink} onClick={this.onClickShrink}></div> :
          <div className={btnExpand} onClick={this.onClickExpand}></div> }
        <div className={sideBarRightHeader}>
          <h3>Active Chat</h3>
        </div>
        <div className={sideBarRightMain}>
          <ul className={chatBox}>
            {chats}
          </ul>
        </div>

        <div className={sectionForm}>
   		  <form className={formChat}>
          <div className={formChatInner}>
            <Textarea textareaRef={(textarea)=> this.textarea = textarea }/>
            <BtnPrimarySm onClick={this.onChatMessageSubmitHandler} className={formChatBtn}>Response</BtnPrimarySm>
          </div>
        </form>
        </div>
      </aside>
    )
  }
}

