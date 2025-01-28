import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bronze Knobby Ant</title>
        <meta property="og:title" content="Bronze Knobby Ant" />
      </Helmet>
      <button
        type="button"
        disabled="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        autoFocus="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        className="home-character-gacha button"
      >
        <span className="home-text1"></span>
      </button>
      <button
        type="button"
        disabled="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        autoFocus="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        className="home-armory button"
      >
        <span className="home-text2"></span>
      </button>
      <button
        type="button"
        disabled="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        autoFocus="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        className="home-gear button"
      >
        <span className="home-text3"></span>
      </button>
      <button
        type="button"
        disabled="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        autoFocus="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        className="home-more-art button"
      >
        <span className="home-text4"></span>
      </button>
    </div>
  )
}

export default Home
