import React, { Component } from 'react';
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router-dom'
import './Text3.css'


class Text3 extends Component {
  render() {
    return (
      <div className="thirdText">
        <div className="container">
          <TextTyping className="text" router="/Text4" text=" T E X T O   T R E S  " / >
          

        </div>
      </div>
    )
  }

}

export default withRouter(Text3)
