import React from 'react';

class TextTyping extends React.Component {

  state = {
    typing: '',
  }

  componentDidMount() {

      const splitText = (this.props.text).split("");


        splitText.forEach((characters, index) => {

          return setTimeout(() =>
          
          console.log(characters), 500 * index);
        
        });
  }


  render() {
    return <h1>{this.state.typing}</h1>
  }
}

export default TextTyping;