import React, { Component } from 'react'
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router'
import './Text8.css'

class Text8 extends Component {
  render() {
    return (
      <div className="eightText">
        <div className="container">
          <TextTyping className="Text" text="Em homenagem a Maud Ellen Bennet que morreu dia 11 de maio por causa de um câncer terminal que demorou anos a ser diagnosticado por gordofobia seu último desejo foi que as mulheres gordas lutassem por sua saúde e não aceitassem que a obesidade é a única doença" router="/Text9"> </TextTyping>
      </div>
      </div >


    )
  }
}

export default withRouter(Text8)