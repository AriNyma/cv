import { Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="sm">
            <Container>
                <Navbar.Brand href="/">Curriculum Vitae</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                <Nav className="me-auto">
                    <NavDropdown title="Field" id="nav-dropdown">
                        <NavDropdown.Item >Information Technology</NavDropdown.Item>
                        <NavDropdown.Item >Civil Enginering</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;