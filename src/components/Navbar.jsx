import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//Navbar bar entirely from react-bootstrap
function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className="mb-4 bg-dark text-danger w-100"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?size=626&ext=jpg&ga=GA1.1.1777253689.1700062667&semt=ais"
            alt="Chef Logo"
            style={{ width: 40, height: 40 }}
            className="rounded-circle"
          />{" "}
          Tasty Spoon & Kitchen
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
          <Nav className="w-100 d-flex justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Book Us</Nav.Link>
            <NavDropdown title="Home servies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Wedding</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Birthday</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Causal Ceremony
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Exclusive Event
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
