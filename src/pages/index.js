import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello San Francisco!</h1>
    <p> 
      Hello, from Australia! I really hope i get to attend <a href="https://jamstackconf.com/">  
      the JAMstack conference in October 2018.</a> 
    </p>
    <p>
      I'm a relatively noob to dev, and it's so addictive that I've given up a pretty solid career to keep at it!
      So, maybe see you in October!  
      <br/><br/> 
      That means you too, Quincy, since your blog put me on to this!
    </p>

    <Link to="/page-2/">Go to page 2</Link>

  </div>
  
)

export default IndexPage
