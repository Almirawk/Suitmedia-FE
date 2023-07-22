import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

export const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" children="&#9776;" style={{ color: 'black' }}/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav >
        <NavDropdown title="ABOUT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">HISTORY</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">VISION MISSION</NavDropdown.Item>
        </NavDropdown>
            <Nav.Link href="#home">OUR WORK</Nav.Link>
            <Nav.Link href="#link">OUR TEAM</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;