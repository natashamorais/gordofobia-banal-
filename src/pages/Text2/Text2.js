import React, { Component } from 'react'
import { withRouter } from 'react-router'
import TextTyping from '../../components/TextTyping'
import './Text2.css'



class Text2 extends Component {
    render() {
        return (
            <div className="secondText">
                <div className="container">
                    <TextTyping className="text" router="/Text3" text=" T E X T O  D O IS ">
                    </TextTyping>

                </div>
            </div>
        )
    }

}
export default withRouter(Text2)