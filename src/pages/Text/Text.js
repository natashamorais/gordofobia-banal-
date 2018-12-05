import React, { Component } from 'react'
import { withRouter } from 'react-router'
import TextTyping from '../../components/TextTyping'
import './Text.css'



class Text extends Component {

  render() {
    return (
      <div className="textHome">
        <div className="container">
          <TextTyping className="text" router="/Text1" text="G O R D A .">
          </TextTyping>

        </div>
      </div>

    )
  }

}

export default withRouter(Text)