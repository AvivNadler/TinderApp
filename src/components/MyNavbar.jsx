import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';



const myStyle = {
    marginRight: '2vh',
    color: 'orange',
    hover: {
        fontWeight: 'bold'
    }

}

const MyNavbar = () => {
    return (
        <Container>
            
        <Navbar bg="dark" variant="dark"  expand="lg" >
            <Navbar.Brand href="#home"><img style={{height:40 }}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo-Tinder.svg/572px-Logo-Tinder.svg.png" alt="backgroundimage"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    
                    <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} to="/home"><img src="https://i.imgur.com/uKuuioD.png" alt="tinderhomelinkimage"></img></NavLink>
                    <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} to="/profile">Profile</NavLink>
                    <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} to="/match/0">Find Match</NavLink>
                    <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} to="/likes/0">My likes</NavLink>
                    <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} to="/Superlikes/0">My Superlikes</NavLink>
                    <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} to="/about">About</NavLink>
           

                  

                </Nav>

            </Navbar.Collapse>
        </Navbar>
        </Container>
    )
}
export default MyNavbar
