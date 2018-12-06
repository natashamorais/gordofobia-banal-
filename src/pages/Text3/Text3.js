import React, { Component } from 'react';
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router'
import './Text3.css'


class Text3 extends Component {
  render() {
    return (
      <div className="thirdText">
        <div className="container">
          <TextTyping className="text" router="/Text4" text=" Tosse? É refluxo por causa do peso, emagreça!" > </TextTyping>
          

        </div>
      </div>
    )
  }

}

export default withRouter(Text3)
