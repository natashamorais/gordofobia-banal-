import React, { Component } from 'react'
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router'
import './Text8.css'

class Text8 extends Component {
  render() {
    return (
      <div className="eightText">
        <div className="container_eight">
          <TextTyping className="Text" text="Em homenagem a Maud Ellen Bennet que morreu no dia 11 de maio de 2018 por conta de um câncer terminal que demorou anos a ser diagnosticado por gordofobia. Seu último desejo foi que as mulheres gordas lutassem por sua saúde, e não aceitassem de seus médicos que seu peso é a única coisa a ser tratada." router="/Text9"> </TextTyping>
      </div>
      </div >


    )
  }
}

export default withRouter(Text8)