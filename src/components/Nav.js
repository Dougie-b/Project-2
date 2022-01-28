import React from "react"
import { Link } from 'react-router-dom'

import Container from "react-bootstrap/Container"

const Nav = () => {
  return (
    <Container className='nav-main'>
      <Link to='/' className='logo'><div>Q</div></Link>
      <Link className='button' to='/list'><p>Give Me Knowledge!!</p></Link>
    </Container >
  )
}

export default Nav