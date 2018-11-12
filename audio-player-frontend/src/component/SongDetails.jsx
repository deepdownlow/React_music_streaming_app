import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SongDetails extends Component {
  state = {
    play: false,
    song:[]
  }
  play = src => {
    const { handlePlay } = this.props
    const { play } = this.state
    handlePlay(src)
    this.setState({play: !play})
  }
  componentDidMount() {
    const { match, songs } = this.props
      const targetId = Number(match.params.id)
      const song = songs.filter(song => targetId === song.id)
      const newSong = {
        name: song[0].title,
        src: song[0].source,
        description: song[0].description 
      }
      this.setState({song: newSong})
    }

  render() {
    const { play, song } = this.state 
    const { songs } = this.props
    return (

      <div className='mt-5'>
        {songs.length !== 0 
        ?
        <div>
        <Link to='/'><h1><i className="fas fa-long-arrow-alt-left animated bounceInRight delay-0.5s"></i></h1></Link>
        <h1 className='animated bounceInLeft'>{song.name}</h1>
        
        {
          play
          ?
          <h1 onClick={this.play} style={style}><i className='far fa-pause-circle animated bounceInLeft'></i></h1>
          :
          <h1 onClick={this.play.bind(this, song.src)} style={style}><i className="far fa-play-circle animated bounceInLeft"></i></h1>
        }
        <h5 className='animated bounceInUp'>{song.description}</h5>
        </div>
        :
        null
        }
      </div>
    )
  }
}
const style = {
  cursor: 'pointer'
}
export default SongDetails
