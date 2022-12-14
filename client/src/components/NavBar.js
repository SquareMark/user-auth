import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigator() {

  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) return <h1>Loading</h1>

  return (
    <Navbar bg="white" variant="light">
      <Container>
        <Navbar.Brand>๐๐ ๐๐๐ซ๐๐ ๐๐ฎ๐๐๐ซ๐๐๐</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className='text-white'>
            <NavDropdown title={user.displayName || user.email} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mis Url's</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>
                Cerrar Sesiรณn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigator;