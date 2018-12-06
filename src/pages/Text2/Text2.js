import React, { Component } from 'react'
import { withRouter } from 'react-router'
import TextTyping from '../../components/TextTyping'
import './Text2.css'



class Text2 extends Component {
    render() {
        return (
            <div className="secondText">
                <div className="container_second">
                    <TextTyping className="text" router="/Text3" text=" Emagreça 10kg em uma semana " />
                    

                </div>
            </div>
        )
    }

}
export default withRouter(Text2)