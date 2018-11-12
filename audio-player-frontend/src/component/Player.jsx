import React, { Component } from "react"

class Player extends Component {
  state = {
    play: false,
    count: 0,
    song:[],
  };
  
  changeSong = dir => {
    const { count } = this.state
    const { change } = this.props
    change(dir)
    if (dir === 'forward') {
      this.setState({count: count + 1})
      if (count === 2) this.setState({count: 0})
    }
    else {
      this.setState({count: count - 1})
      if (count === 0) this.setState({count: 2})
    }
  };
  play = src => {
    const { handlePlay } = this.props
    const { play } = this.state
    handlePlay(src)
    this.setState({play: !play})
  }
  
  componentDidUpdate(prevProps) {
    const { songDetail } = this.props;
    if (this.props.songDetail !== prevProps.songDetail) {
      const newSong = {
        name: songDetail.map(song => song.name),
        lyric: songDetail.map(song => song.lyric),
        src: songDetail.map(song => song.source),
      }
      this.setState({
        song: newSong
      })
    }
  }

  render() {
    const { play, song, count } = this.state
    return (
      <div className="container text-dark mt-5">
        {
          song.length !== 0
          ?
          <div>
            {play ? (
          <h4
            className="float-left animated bounceInRight"
            style={positionPLaying}
          >
            Now Playing: {song.name[count]}
          </h4>
          
        ) : (
          <h4
            className="float-left animated bounceInRight"
            style={positionPLaying}
          >
            Next: {song.name[count]}
          </h4>
        )}
        <div style={position} className="animated bounceInUp">
          <h3
            onClick={() => this.changeSong("back")}
          >
            <i className="fas fa-backward" style={style} />
          </h3>
          <div className="d-inline-block">
            {play ? (
              <h3 className="display-3">
                <i className="fas fa-pause" style={style} onClick={this.play} />
              </h3>
            ) : (
              <h3 className="display-3">
                <i className="fas fa-play" style={style} onClick={this.play.bind(this, song.src[count])} />
              </h3>
            )}
          </div>
          <h3 onClick={() => this.changeSong("forward")}>
            <i className="fas fa-forward" style={style} ref="leila" />
          </h3>
        </div>
        {play ? (
          <div>
            <h1 className="animated bounceInDown">Lyrics</h1>
            <h5 className="animated bounceInUp delays-2s">{song.lyric[count]}</h5>
          </div>
        ) : (
          false
        )}
          </div>
          :
          null
        }
      </div>
    )
  }
}
const style = {
  cursor: "pointer"
}
const position = {
  position: "fixed",
  top: "50",
  right: "0",
  marginRight: "10px"
}
const positionPLaying = {
  position: "fixed",
  top: "0",
  marginRight: "10px",
  letterSpacing: "5px"
}
export default Player;
