import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Song extends Component {
  state = {
    play: false,
    src:''
  }
  play = src => {
    const { handlePlay } = this.props
    const { play } = this.state
    handlePlay(src)
    this.setState({play: !play})
  }
  componentDidMount(){this.setState({src: this.props.src})}
  render() {
    const { title, id, length, src } = this.props
    const { play } = this.state
    return (
      <div>
        <h4>
          <Link style={style} to={`/${id}`}>
          "{title}"
          </Link>
          <span className='float-right'>
          {
            play
            ?
            <h1 onClick={this.play} style={style}><i className='far fa-pause-circle animated bounceInLeft'></i></h1>
            :
            <h1 onClick={this.play.bind(this,src)} style={style}><i className="far fa-play-circle animated bounceInLeft"></i></h1>
          }
          </span>
        </h4>
        <small>length: {length}</small>
    </div>

    )
  }
}

const style = {
 cursor: 'pointer',
 textDecoration: 'none'
}
export default Song