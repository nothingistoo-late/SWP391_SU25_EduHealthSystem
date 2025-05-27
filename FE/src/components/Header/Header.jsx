import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { getUserInfo } from '../../services/handleStorageApi';

const Header = () => {
    const navigate = useNavigate();

    const userInfo = getUserInfo();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userInfo');
        navigate('/');
    };

    console.log('check userInfo', userInfo);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink className='navbar-brand' to="/">FreddyJS</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/admin">Admin</NavLink>
                        <NavLink className='nav-link' to="/user">User</NavLink>
                    </Nav>
                    <Nav>
                        {userInfo ? (
                            <>
                                <span className="nav-link">Hi, <strong>{userInfo.firstName}</strong></span>
                                <button className='btn btn-outline-danger ms-2' onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <button className='btn btn-login' onClick={() => navigate('/signin')}>Log in</button>
                                <button className='btn btn-signup' onClick={() => navigate('/register')}>Sign Up</button>
                            </>
                        )}
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item>Profiles</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
