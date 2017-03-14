const initialState = {
  organizatioName: '',
  
  // chat status is ended

  chatHistory: [{
    sessionId: "",
    status: 'pending', // active, pending, ended
    operatorId: '',
    customerId: '',
    records: [{ message: "Hi"}, { message: "Thank you for reaching out to me!"}, { message: "No worries"}]
  }],

  // chat status is pending
  pendingSession: [{
  }],

  // chat status is active
  activeChat: [{

  }]
}

export function organization(state=initialState, action) {
  return state
}