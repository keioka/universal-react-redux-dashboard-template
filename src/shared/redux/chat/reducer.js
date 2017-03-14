import {
  POST_CHAT_MESSEAGE_PENDING,
  POST_CHAT_MESSEAGE_SUCCESS,
  POST_CHAT_MESSEAGE_ERROR,
  GET_CHAT_MESSEAGE_SUCCESS
} from './actionType'

const initialState = {
  sessionId: "",
  status: '', // active, pending, ended
  operatorId: '',
  customerId: '',
  records: [{ message: "Hi"}, { message: "Thank you for reaching out to me!"}, { message: "No worries"}]
}


export function chat(state=initialState, action){
  switch(action.type) {
  	case POST_CHAT_MESSEAGE_SUCCESS: 
  	  return Object.assign({}, state, {
  	  	records: state.records.concat([{ message: action.payload }])
  	  })
    case GET_CHAT_MESSEAGE_SUCCESS:
      console.log(GET_CHAT_MESSEAGE_SUCCESS)

  	default: 
  	  return state
  }
 
}