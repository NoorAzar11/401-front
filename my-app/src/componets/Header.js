import React, { Component } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap/'
export class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Coffe Home </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Fav">Favourte Coffee</Nav.Link>
             
            </Nav>
            </Container>
          </Navbar>
        )
    }
}

export default Header
