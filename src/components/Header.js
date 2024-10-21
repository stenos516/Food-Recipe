
import React from 'react';
import { Link } from 'react-router-dom';
import balloon from '../assets/balloon.png';
const Header = () => (
  <header className='header-links'>
    <img src={balloon} alt='food-logo' className='logo' />
    <nav>
      <ul>
      <li><Link to="/">Food Recipes</Link></li>
     <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
