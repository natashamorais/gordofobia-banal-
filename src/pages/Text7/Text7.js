import React, { Component } from 'react'
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router'
import './Text7.css'

class Text7 extends Component {
  render() {
    return (
      <div className="seventhText">
        <div className="container_seventh">
          <TextTyping className="Text" text="Pessoas gordas morrem por negligência médica quando se recusam a tratar seus sintomas além da obesidade" router="/Text8"> </TextTyping>
      </div>
      </div>


    )
  }
}

export default withRouter(Text7)