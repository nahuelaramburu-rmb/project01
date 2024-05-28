import React from 'react';
import Logo from '../../assets/logos/logo.jpg';
import './Header.css';
const Header = () => {
  return (
    <div className="d-flex justify-content-center">
      <img 
        src={Logo} 
        alt="Logo" 
        className="img-fluid rounded-circle my-3 logo" 
        style={{borderRadius: '60%'}} 
      />
    </div>
  );
}

export default Header;