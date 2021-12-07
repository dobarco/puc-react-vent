import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
import AuthContext from '../store/auth-context';
import { useContext } from 'react';
function Header() {

    //Accessing the Global State.

    const ctx = useContext(AuthContext);

    return (<Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>
                <Nav.Link as={Link} to="/">Alunos App</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/alunos">Listagem de Alunos</Nav.Link>
                    {ctx.isLoggedIn && <Nav.Link as={Link} to="/cadastro" >Cadastrar Alunos</Nav.Link>}
                    {ctx.isLoggedIn && <Nav.Link as={Link} onClick={ctx.onLogout} to="/" >Logout</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header;