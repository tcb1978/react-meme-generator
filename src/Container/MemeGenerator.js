import React, {Component, Fragment} from 'react';

export default class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg'
    };
  }

  render() {
    return (
      <Fragment>
        <h1>Meme Generator Section</h1>
      </Fragment>
    );
  }
}