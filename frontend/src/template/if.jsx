import React from 'react'

//Does not return a component
export default (props) => {
  if(props.test) {
    return props.children 
  } else {
    return false
  }   
}