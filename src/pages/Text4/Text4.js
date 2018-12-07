import React, { Component } from 'react'
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router'
import './Text4.css'

class Text4 extends Component {
  render() {
    return (
      <div className="fourthText">
        <div className="container_fourth">
        <TextTyping className="Text" text="Dor de barriga? Você come demais, emagreça!" router="Text5"> </TextTyping>
      </div>
      </div>


    )
  }
}

export default withRouter(Text4)