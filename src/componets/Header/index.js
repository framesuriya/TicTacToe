import React from 'react';

import logo from '../../assets/logo.svg';

import './Header.scss';

// implement header using Header.scss
// adding logo image as final design
function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo}/>
      <h1  className='header__title'>React Tic Tac Toe challenge</h1>
    </header>
  );
}

export default Header;
