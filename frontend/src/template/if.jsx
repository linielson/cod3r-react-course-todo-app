import React from 'react'

//Does not return a componet
export default (props) => {
  if(props.test) {
    return props.children 
  } else {
    return false
  }   
}