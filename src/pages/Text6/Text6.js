import React, { Component } from 'react'
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router'
import './Text6.css'

class Text6 extends Component {
  render() {
    return (
      <div className="sixthText">
        <div className="container">
          <TextTyping className="Text" text="Sibutramina rémedio (pra obesidade) efeitos colaterais : Depressão, Dor de cabeça; 
Prisão de ventre;
Diarreia;
Secura da boca;
Ansiedade;
Alterações no paladar;
Aumento da pressão arterial;
Insônia;
Náuseas e tonturas;
Aumento do suor;
Ondas de calor;
Piora das hemorroidas;
Delírio;
Tonturas;
Alterações de sensibilidade;
Palpitações e aumento do batimento cardíaco." router="/Text7"> </TextTyping>
      </div>
      </div >


    )
  }
}

export default withRouter(Text6)