import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
           <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link ><Link to='/'>Home</Link> </Nav.Link>
      <Nav.Link ><Link to='/favorite'>favorite</Link></Nav.Link>
    
    </Nav>
    
  </Navbar>
        )
    }
}

export default Header
