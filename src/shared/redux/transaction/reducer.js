const initialState = {
  transactions: [
    {
      paymentDate: '',
      paymentDue: '',
      customerId: '',
      plan: '',
      planFee: '',
      totalFee: '',
      type: ''
    }
  ]
}

export function transaction(state=initialState, action){
  return state
}