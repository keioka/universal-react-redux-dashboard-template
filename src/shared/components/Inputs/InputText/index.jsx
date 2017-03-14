import React, { Component } from 'react'

import {
  inputText,
} from './style.scss'

const InputText = (props) => {
  const { name, id, cols, rows, className } = props
  const concatedClass = `${inputText} ${className}`
  return (
  	<input type="text" 
  	  name={name} 
  	  id={id} 
  	  className={concatedClass}
  	  cols={cols} 
  	  rows={rows} 
  	/>
  )
}


export default InputText