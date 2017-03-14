export default class AuthResource {
  static login({email, password}){
  	const data = new FormData()
    const loginInfo = {
  	  email,
  	  password
    }

    data.append('body', JSON.stringify(loginInfo))

  	return fetch(AuthResource.login(), {
      method: 'POST',
      body: data,
    })
  }
}