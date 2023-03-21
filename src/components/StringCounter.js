import React from 'react'

export const NewString = (props) => {
    return (
        <input onChange={props.inputHandler} value={props.inputString}  placeholder='Pleaser enter your String'/>
    )
}

export const StringCounter = (props) => {
  // count a string

  return (
    <div>StringCounter: {props.inputString.length}</div>
  )
}

// Demonstration, how default works
export default function MyDefaultFunc() {
    return (
        <h1>Default</h1>
    )
}