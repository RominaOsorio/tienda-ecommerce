import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { FaUser, FaShoppingCart, FaStore, FaHeart, FaHome } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Navigation = () => {
  const { isAuthenticated, logout } = useContext(AuthContext)

  const handleMenu = ({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'

  return (
    <>
      <Navbar className='fixed-top' expand='lg' bg='dark' data-bs-theme='dark'>
        <Container>
          <NavLink className={handleMenu} to='/'>
            <Navbar.Brand>
              <img
                src={logo}
                alt='Logo'
                width='60'
                height='60'
                className='d-inline-block align-top'
              />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink className={handleMenu} to='/'><FaHome /></NavLink>
              {isAuthenticated && (
                <>
                  <NavLink className={handleMenu} to='/productos'><FaStore /></NavLink>
                  <NavLink className={handleMenu} to='/profile'><FaUser /></NavLink>
                  <NavLink className={handleMenu} to='/favoritos'><FaHeart /></NavLink>
                  <NavLink className={handleMenu} to='/carrito'><FaShoppingCart /></NavLink>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <NavLink className={handleMenu} to='/login'>Login</NavLink>
                  <NavLink className={handleMenu} to='/register'>Registrarse</NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
