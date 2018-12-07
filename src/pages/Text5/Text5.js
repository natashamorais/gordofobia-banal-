import React, { Component } from 'react'
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router'
import './Text5.css'

class Text5 extends Component {
  render() {
    return (
      <div className="fifthText">
        <div className="container_fifth">
          <TextTyping className="Text" router="/Text6" text="Depressão é bobagem. Emagrece que você melhora"> </TextTyping>
      </div>
      </div >


    )
  }
}

export default withRouter(Text5)