import {
  POST_CHAT_MESSEAGE_PENDING,
  POST_CHAT_MESSEAGE_SUCCESS,
  POST_CHAT_MESSEAGE_ERROR,
  GET_CHAT_MESSEAGE_SUCCESS
} from './actionType'


import Firebase from '../../firebase/firebase'


export const chatMessageRequest = (message, sessionId) => (dispatch) => {
  dispatch(chatMessageSuccess(message))
}

const chatMessagePending = ({
  type: POST_CHAT_MESSEAGE_PENDING
})

const chatMessageSuccess = (message) => ({
  type: POST_CHAT_MESSEAGE_SUCCESS,
  payload: message
})

const chatMessageError = (error) => ({
  type: POST_CHAT_MESSEAGE_ERROR,
  payload: error
})

export const getChatMessageSuccess = (message) => ({
  type: GET_CHAT_MESSEAGE_SUCCESS,
  payload: message
})

const ChatResource = new Firebase({
  onLoad: getChatMessageSuccess,
  onAdd: getChatMessageSuccess
}, 'chat')


export const subscribeChatMessage = (chatSessionId) => (dispatch) => {
  console.log("subscribeChatMessage")
  ChatResource.path = `chats/${chatSessionId}`
  ChatResource.subscribe(dispatch)
}