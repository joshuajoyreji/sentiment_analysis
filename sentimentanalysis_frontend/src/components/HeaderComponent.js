import React from 'react';
import './HeaderCSS.css';
import { Navbar, NavItem, NavbarToggler, Collapse, Nav, NavbarBrand, Button } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';

function Header({ isLoggedIn, handleLogout }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleLogoutClick = () => {
        handleLogout();
        navigate('/home');
    };

    return (
        <header>
            <Navbar className='navb' expand="md">
                <div className="container">
                    <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                    <div className="d-flex align-items-center">
                        <NavbarBrand className="heading" tag={NavLink} to="/home">
                            SentimentSpy
                        </NavbarBrand>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="me-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link content" to="/home">
                                        Home
                                    </NavLink>
                                </NavItem>
                                {isLoggedIn && (
                                    <>
                                        <NavItem>
                                            <NavLink className="nav-link content" to="/search">
                                                Search
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link content" to="/profile">
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                    </>
                                )}
                            </Nav>
                        </Collapse>
                        <div className="ml-auto">
                            {isLoggedIn ? (
                                <Button className="button lbutn" onClick={handleLogoutClick}>
                                    Logout
                                </Button>
                            ) : (
                                <>
                                    <Button className="button butn">
                                        <NavLink to="/login" className="nav-link">
                                            Login
                                        </NavLink>
                                    </Button>
                                    <Button className="button butn">
                                        <NavLink to="/signup" className="nav-link">
                                            Signup
                                        </NavLink>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Navbar>
        </header>
    );
}

export default Header;
