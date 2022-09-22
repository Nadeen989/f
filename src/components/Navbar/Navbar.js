import { Link } from 'react-router-dom';
import logo from '../../assets/lastlogo.ico';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className='nav'>
      <div>
        <img src={logo} alt='' className='img' />
        <h3>Quick Check</h3>
      </div>
      <ul className='list'>
        <li>
          <Link to='/email'>Email</Link>
        </li>
        <li>
          <Link to='/url'>Url</Link>
        </li>
        <li>
          <Link to='/phoneNumber'>PhoneNumber</Link>
        </li>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
