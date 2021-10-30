import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import useAuth from '../../Hooks/useAuth';
import logo from '../../image/logo2.png'
const Header = () => {
    const { isLogIn, logOut } = useAuth()
    const history = useHistory()

    const handleLogIn = () => {
        if (isLogIn) {
            logOut()
        }
        else {
            history.push('/login')
        }

    }
    return (
        <div>
            {/* <nav>
                <img height="50px" src={logo} alt="img" />
                <Link to="/login" > Login</Link>

            </nav> */}

            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img height="50px" src={logo} alt="img" /></Navbar.Brand>
                    <Nav className="me-start">
                        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/order">My Order</Nav.Link>
                        <button onClick={handleLogIn} className="btn btn-danger text-white">{isLogIn ? 'Sign Out' : 'Login'}</button>
                        {/* <button type="button" className="btn btn-danger">Sign up</button> */}
                    </Nav>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;