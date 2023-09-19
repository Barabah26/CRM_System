import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
        <Link to="/" className="nav-link">Головна</Link>
      </li>

      <li className="nav-item">
        <Link to="/login" className="nav-link">Вхід</Link>
      </li>
      <li className="nav-item">
        <Link to="/dataTable" className="nav-link">Табличка</Link>
      </li>
      
    </ul>
  </nav>
  );


}
export default NavBar;