import React, { Component } from 'react';
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router-dom'
import './Text1.css'


class Text1 extends Component {
    render() {
        return (

            <div className="firstText">
                <div className="container">
                    <TextTyping className="text" router="/Text2" text=" Texto um ">
                    </TextTyping>

                </div>
            </div>

        )
    }

}





export default withRouter(Text1)
