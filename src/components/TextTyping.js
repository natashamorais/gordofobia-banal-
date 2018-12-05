import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
// import Page1 from '../pages/page1'

class TextTyping extends Component {

  state = {
    typing: '',
  }

  componentDidMount() {

    const splitText = (this.props.text).split("");


    splitText.forEach((characters, index) => {

      return setTimeout(() => {
        this.setState({
          typing: this.state.typing += characters
        });

        if (index === splitText.length - 1) {
          setTimeout(() => {
            if(this.props.router !== undefined){
              this.props.history.push(this.props.router)
            }
          }, 2000);
        }

      }, 100 * index);

    });
  }
  render() {
    return <h1>{this.state.typing}</h1>
  }
}

export default withRouter(TextTyping);