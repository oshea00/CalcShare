import React, { useState } from 'react';
import {
    Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import './NavMenu.css';
import logo from '../assets/hp67ico.png';
import Loading from './Loading';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

    if (loading) {
        return (
            <Loading/>    
        );
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
            <Container>
                    <NavbarBrand tag={Link} to="/">
                        <img alt="logo" className="logo" src={logo} />
                        <span className="ml-4">Calculator Software</span>
                    </NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
                <ul className="navbar-nav flex-grow">
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/fetch-data">Weather</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/external-api">Authors</NavLink>
                </NavItem>     
                {isAuthenticated && (
                <NavItem>
                    <NavLink className="text-dark" href="#" onClick={()=>logout()}>Logout</NavLink>
                </NavItem>
                )}
                {!isAuthenticated && (
                <NavItem>
                    <NavLink className="text-dark" href="#" onClick={()=>loginWithRedirect({})}>Login</NavLink>
                 </NavItem>
                )}
                </ul>
            </Collapse>
            </Container>
        </Navbar>
        </header>
    );
}

export default NavMenu

