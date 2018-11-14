import React from 'react'
import GifPlayer from 'react-gif-player'

const Loading = () => {
  return (
    <div>
      <h1>LOADING...</h1>
      <GifPlayer class="gif_player" id="loading" gif="https://media.tenor.com/images/cb37bbf6a6099e6e60981776bed03a76/tenor.gif" autoplay="true"/>
    </div>
  )
}

export default Loading
