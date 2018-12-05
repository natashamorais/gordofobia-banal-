import React, { Component } from 'react'
import TextTyping from '../../components/TextTyping'
// import { withRouter } from '.react-router'
import './Text4.css'

class Text4 extends Component {
  render() {
    return (
      <div className="fourthText">
        <div className= "container">
          <TextTyping className="Text" text = "texto quatroo"> </TextTyping>
        </div>
      </div>


    )
  }
}

export default Text4