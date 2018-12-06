import React, { Component } from 'react'
import TextTyping from '../../components/TextTyping'
import {withRouter} from 'react-router'
import './Text9.css'

class Text9 extends Component {
  render() {
    return (
      <div className="ninethText">
        <div className="container">
<TextTyping className="Text" text="G O R D O F O B I A ." router="/Text10"> </TextTyping> 
      </div>
      </div >


    )
  }
}

export default withRouter(Text9)