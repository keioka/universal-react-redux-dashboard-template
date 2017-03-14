import React, { Component } from 'react'

import {
  listCustomers,
  listCustomersTable
} from './style.scss'

export default class ListTransaction extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const customers = this.props.customers
    const customersComponents = customers.map((customer)=>{
      const { id, name, email, phone, plan } = customer
      return (
        <tr key={id}>
　　　　   <td>{id}</td>
　　　　   <td>{name}</td>
　　　　   <td>{email}</td>
　　　　   <td>{phone}</td>
　　　　   <td>{plan}</td>
　　　　 </tr>
      )
    })

  	return (
  	  <div className={listCustomers}>
        <table className={listCustomersTable}>
          <caption>Customers List</caption>
          <thead>
　　　　　    <tr>
              <th><i>ID</i></th>
　　　　　      <th><i>Name</i></th>
　　　　　      <th><i>Email</i></th>
　　　　　      <th><i>Phone</i></th>
　　　　　      <th><i>Plan</i></th>
　　　　　    </tr>
          </thead>
          <tbody>
            {customersComponents}
          </tbody>
        </table>
  	  </div>
  	)
  }
}
