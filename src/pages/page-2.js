import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <p>...or...</p>
    <Link to="/page-3">Go to this pointless 3rd page!</Link>
  </div>
)

export default SecondPage
