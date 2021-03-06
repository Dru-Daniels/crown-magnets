import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assests/magnet.png'

import './header.style.scss'

const Header = () => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <img src={Logo} alt='Cause Magnet Logo' className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
    </div>
  </div>
)

export default Header