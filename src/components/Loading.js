import React from 'react'
import GifPlayer from 'react-gif-player'
import Title from './Title'

const Loading = () => {
  return (
    <div id="loading">
      <GifPlayer class="player2" id="loading1" gif="https://media1.tenor.com/images/cd77f35d8796025d03b5452d65269e9d/tenor.gif?itemid=8766696" autoplay="true"/>
      <GifPlayer class="player1" id="loading2" gif="https://i.makeagif.com/media/9-30-2015/uLT5lG.gif" autoplay="true"/>
      <Title/>
    </div>
  )
}

export default Loading
