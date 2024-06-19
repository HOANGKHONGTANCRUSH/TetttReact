import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();

    const handlLogin = () => {
        navigate('Login')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="">Việt Hoàng</Navbar.Brand> */}
                <NavLink to='/' className='navbar-brand'>Viet Hoang</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link '>Home</NavLink>
                        <NavLink to='/users' className='nav-link '>Users</NavLink>
                        <NavLink to='/admins' className='nav-link '>Admin</NavLink>
                    </Nav>
                    <Nav>
                        <button className='btn-login' onClick={() => handlLogin()}>Login</button>
                        <button className='btn-signup'>Sign up</button>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item >Log in</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                Log uot
                            </NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;