import React from 'react'
import Song from './Song'

const SongList = ({ songs, handlePlay }) => {
  const play = src => {
    handlePlay(src)
  }
    const playList = songs.map(song => <div key={song.id}><Song title={song.title} id={song.id} length={song.length} src={song.source} handlePlay={play}/><hr/></div>)
    return (
      <div className='container mt-5 animated bounceInLeft'>
       <h1 className='display-3 mb-5'>Track List</h1>
        {playList}
      </div>
    )
  }
export default SongList