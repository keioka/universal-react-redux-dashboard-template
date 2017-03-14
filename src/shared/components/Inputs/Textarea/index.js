import React, { Component } from 'react'

import {
  textarea,
} from './style.scss'

const Textarea = (props) => {
  let textareaElement;
  const { name, id, cols, rows, className, textareaRef } = props
  const concatedClass = `${textarea} ${className}`
  return (
  	<textarea 
  	  name={name}
      ref={textareaRef}
  	  id={id} 
  	  className={concatedClass}
  	  cols={cols} 
  	  rows={rows} 
  	/>
  )
}


export default Textarea