import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/" id="brand">Reci.P</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" id="link0">Home</Nav.Link>
                    <Nav.Link href="/RecipeTable" id="link1">Recipe Table</Nav.Link>
                    <Nav.Link href="/RecipePage" id="link2">Recipe Page</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);