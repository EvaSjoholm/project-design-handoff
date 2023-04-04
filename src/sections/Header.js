import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo/Vector.png'
import MenuIcon from '../assets/icons/Menu.png'
import SearchIcon from '../assets/icons/Search.png'
import LogoMini from '../assets/logo/VectorMini.png'
import LogoSmall from '../assets/logo/VectorSmall.png'

import './Header.css'

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const isDesktop = screenSize >= 1025;
  const isMobile = screenSize <= 640;

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isDesktop && (
        <div className="Header">
          {isMobile && (<img src={LogoMini} alt="Gracious moments logo" />)}
          {isMobile && (<img src={LogoSmall} alt="Gracious moments logo" />)}
          <div className="icons">
            <img src={MenuIcon} alt="menu" className="menu" />
            <img src={SearchIcon} alt="search" className="search" />
          </div>
        </div>
      )}

      {isDesktop && (
        <div className="Header">
          <img src={Logo} alt="Gracious moments logo" />
          <div className="menu-text">
            <p>Classes</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <p className="search-text">Search</p>
        </div>
      )}
    </>
  );
};

export default Header;