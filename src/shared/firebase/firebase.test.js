import Firebase from './firebase.js'


const firebaseChat = new Firebase({
  onAdd: function(value){
    console.log(value)
  }
})


console.log(firebaseChat)