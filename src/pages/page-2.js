import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>This is the Second Page</h1>
    <p>
      It came with the site generator, so I'm keeping it here, in case it feels victimised by removal. After all, I've added a page 3, 
      and I would not want to make one page feel inferior to another, especially a johnny-come-lately page...
    </p>
    
    <p><Link to="/">Go back to the homepage</Link>   ...or...</p>
    
    <Link to="/page-3">Go to this pointless 3rd page!</Link>
  
  </div>

)

export default SecondPage
