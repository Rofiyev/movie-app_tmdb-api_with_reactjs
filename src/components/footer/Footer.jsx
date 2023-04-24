import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../Images/movie.jpg';
import logo from '../../Images/logo.png';
import { footerData } from '../../Data';

const Footer = () => {
  return (
    <div className='footer' style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85)), url(${bg})` }}>
      <div className="footer__content">
        <div className="footer__content__logo">
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            {footerData.data_1.map(data => (
              <Link key={data.title} to={data.slug}>{data.title}</Link>
            ))}
          </div>
          <div className="footer__content__menu">
            {footerData.data_2.map(data => (
              <Link key={data.title} to={data.slug}>{data.title}</Link>
            ))}
          </div>
          <div className="footer__content__menu">
            {footerData.data_3.map(data => (
              <Link key={data.title} to={data.slug}>{data.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer;