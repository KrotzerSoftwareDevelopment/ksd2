import React from 'react';
import '../FilePages/Styles.css';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <div className="navigation">
      <div className="naviContainer">
      <ul>
      <Link to="/"><li className="logoNavi">KSD</li></Link>
      <Link to="/HomePage"><li>Home </li> </Link>
      <Link to="/About"><li>About</li></Link>
      <Link to="/Contact"><li>Contact</li></Link>
      <Link to="/Consult"><li>Consult</li></Link>
      <Link to="/Portfolio"><li>Portfolio</li></Link>
      </ul>
      </div>
      </div>
  );
}

export default Navigation;