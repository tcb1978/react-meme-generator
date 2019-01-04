import React, {Component} from 'react';

export default class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImages: []
    };
  }

  componentWillMount() {
    const api = 'https://api.imgflip.com/get_memes'
    fetch(api)
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({
          allMemeImages: memes
        })
      })
  }

  handleChange = (e) => {
    const {name, value} = e.target
    console.log(e.target.value, e.target.name)
    this.setState({
      [name]: value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    const urls = this.state.allMemeImages.map(img => img.url)
    const memeUrl = urls[Math.floor(Math.random() * urls.length)]
    this.setState({
      randomImage: memeUrl
    })
  }

  render() {

    return (
      <div>
        <form
        className="meme-form"
        onClick={this.handleClick}>

          <input
            name="topText"
            type="text"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input
            name="bottomText"
            type="text"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>

      </div>
    );
  }
}