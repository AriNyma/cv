import { Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="primary" collapseOnSelect expand="sm">
            <Container>
                <Navbar.Brand href="/">Example Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/link">Link</Nav.Link>
                    <NavDropdown title="Field" id="nav-dropdown">
                        <NavDropdown.Item href="/action1">Action 1</NavDropdown.Item>
                        <NavDropdown.Item href="/action2">Action 2</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;