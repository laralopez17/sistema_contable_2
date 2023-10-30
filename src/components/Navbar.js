import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navigation-bar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/transactions">Transacciones</Link>
        </li>
        <li>
          <Link to="/reports">Reportes</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
