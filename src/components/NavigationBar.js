import { Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="sm">
            <Container>
                <Navbar.Brand>Ari Nyman</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                <Nav className="me-auto">
                    <NavDropdown title="Field" id="nav-dropdown">
                        <NavDropdown.Item >Information Technology (under construction)</NavDropdown.Item>
                        <NavDropdown.Item >Civil Enginering (under construction)</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Projects" id="nav-dropdown">
                        <NavDropdown.Item >Information Technology (under construction)</NavDropdown.Item>
                        <NavDropdown.Item >Civil Enginering (under construction)</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;