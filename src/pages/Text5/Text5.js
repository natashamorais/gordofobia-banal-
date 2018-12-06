import React, { Component } from 'react'
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router'
import './Text5.css'

class Text5 extends Component {
  render() {
    return (
      <div className="fifthText">
        <div className="container">
          <TextTyping className="Text" text="Depressão é bobagem. Emagrece que você melhora" router="/Text6"> </TextTyping>
      </div>
      </div >


    )
  }
}

export default withRouter(Text5)