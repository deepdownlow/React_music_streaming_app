import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import SongList from './component/SongList'
import SongDetails from './component/SongDetails'
import Player from './component/Player'
import axios from 'axios'

class App extends Component {
  state = {
    play: false,
    count:0,
    currentSong:'',
    songs: []
  }
  play = src => {
    const { play } = this.state
    this.setState({currentSong: src} , () => {
      if (play) {
        this.setState({ play: !play })
        this.audio.pause()
      } else {
        this.setState({ play: !play })
        this.audio.play()
      }
    })
  }
  change = dir => {
    const { count } = this.state
    if (dir === 'forward') this.setState({count: count + 1})
    if (dir === 'back') this.setState({count: count - 1})
  }
  componentDidMount() {
    axios.get( `http://localhost:1368/song`)
     .then(({data}) => {
       this.setState({songs: data})
      }, () => this.setState({currentSong: 'sina'}))
     .catch(err => console.log(err))
  }
  render() {
    const { songs, count, currentSong } = this.state
    const songsDetail = songs.map(el => {
      return {
        name: el.title,
        source: el.source,
        lyric: el.lyric,
      }
    })
    return (
      <div className='container row'>
        <div className="col-md-8">
         <Switch>
          <Route path='/' exact render={props => <SongList {...props} songs={songs} handlePlay={this.play}/>} />
          {songs.length !== 0 ?<Route path='/:id' render={props => <SongDetails {...props} songs={songs} handlePlay={this.play}/>} /> : null}
        </Switch>
        </div>
        <div className="col-md-4">
         <Player songDetail={songsDetail} change={this.change} handlePlay={this.play} handleChange={this.changeSong} count={count}/>
        </div>    
         {songs.length !== 0 ? <audio src={currentSong} ref={audio => this.audio = audio}></audio> : null }
      </div>
    )
  }
}

export default App
