import React from 'react'

import { Helmet } from 'react-helmet'

import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home1 - Bronze Knobby Ant</title>
        <meta property="og:title" content="Home1 - Bronze Knobby Ant" />
      </Helmet>
    </div>
  )
}

export default Home1
