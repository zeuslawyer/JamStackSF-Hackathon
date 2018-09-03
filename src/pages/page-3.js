import React from 'react'
import Link from 'gatsby-link'

const ThirdPage = () => (
  <div>
    <h1>Wow....really got nothing to do today, huh? ;-D</h1>
    <p>Well then...welcome to page 3</p>
    <hr></hr>
    <h3>Question...are these people at a hackathon? </h3>
    <small>Or even having a real conversation?</small>
    <img src='https://discourse-user-assets.s3.amazonaws.com/original/3X/4/2/42008fce12d0be48b311a3c890fd556f40cf3db4.jpeg'></img>
    <p>Yep, you guessed it.... you can....</p>
    <p>retreat back to the <Link to ="/"> Home Page </Link> ...or...<Link to="page-2">Page 2!</Link></p>
    <p>see ya later!</p>
  </div>
)

export default ThirdPage