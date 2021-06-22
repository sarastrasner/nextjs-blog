import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeToggler from '@/components/ThemeToggler';

export default function NavigationBar(props) {

  return (
    <div>
      <Navbar className="bg-lightPink">
        <Navbar.Brand className="text-white" href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="text-white" href="/ireland">Ireland</Nav.Link>
            <Nav.Link className="text-white" href="/scotland">Scotland</Nav.Link>
            {/* <Nav.Link className="text-white" href="/canada">Canada</Nav.Link> */}
            {/* <NavDropdown className="text-white" title="Future Trips" id="basic-nav-dropdown">
              <NavDropdown.Item  href="/future-trips/turkey">
                Turkey
              </NavDropdown.Item>
              <NavDropdown.Item href="/future-trips/croatia">
                Croatia
              </NavDropdown.Item>
              <NavDropdown.Item href="/future-trips/south-korea">
                South Korea
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <ThemeToggler />
      </Navbar>
    </div>
  );
}
