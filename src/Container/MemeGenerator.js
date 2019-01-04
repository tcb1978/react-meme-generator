import React, {Component, Fragment} from 'react';

export default class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allmemeImages: []
    };
  }

  componentWillMount() {
    const api = 'https://api.imgflip.com/get_memes'
    fetch(api)
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        console.log(memes);
        this.setState({
          allmemeImages: memes
        })
      })
  }

  render() {
    return (
      <Fragment>
        <h1>Meme Generator Section</h1>
      </Fragment>
    );
  }
}