import React, { useEffect, useRef } from 'react';
import './header.scss';
import logo from '../../Images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { navbarData } from '../../Data';

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = navbarData.findIndex(e => e.slug === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) headerRef.current.classList.add('shrink');
      else headerRef.current.classList.remove('shrink');
    }
    window.addEventListener('scroll', shrinkHeader);
    
    return () => window.removeEventListener('scroll', shrinkHeader);
  }, []);


  return (
    <div ref={headerRef} className='header'>
      <div className="header__wrap container">
        <div className="logo">
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="header__nav">
          {navbarData.map((item, i) => (
            <li key={i} className={`${i === active ? 'active' : ''}`}>
              <Link to={item.slug}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header