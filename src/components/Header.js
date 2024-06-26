import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>MyFinance</h1>
      <img width="48" height="48" src="https://img.icons8.com/material-two-tone/48/000000/bonds.png" alt="bonds"/>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/transactions">Transações</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
