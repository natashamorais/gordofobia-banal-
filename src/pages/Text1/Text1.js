import React, { Component } from 'react';
import TextTyping from '../../components/TextTyping'
import { withRouter } from 'react-router'
import './Text1.css'


class Text1 extends Component {
    render() {
        return (

            <div className="firstText">
                <div className="container_first">
                    <TextTyping className="text" router="/Text2" text=" Você não acha que deveria emagrecer? É pra sua saúde... ">
                    </TextTyping>

                </div>
            </div>

        )
    }

}





export default withRouter(Text1)
