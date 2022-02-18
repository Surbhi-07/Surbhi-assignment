import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <div>
      <button onClick={()=>alert("You clicked on button1")}>Button1</button>
      <button onClick={()=>alert("You clicked on button2")}>Button2</button>
      <button onClick={()=>alert("You clicked on button3")}>Button3</button>
      </div>
    )
  }
}
