import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ language, setLanguageHandler }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const textMap = {
    en: {
      linkOne: "Home",
      linkTwo: "Project Gallery",
      linkThree: "Contact us"
    },
    es: {
      linkOne: "Inicio",
      linkTwo: "Galería de Proyectos",
      linkThree: "Contáctanos"
    }
  };

  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <header className="header">
      {isMenuOpen && <div className="header__overlay" onClick={toggleMenu}></div>}
      <div className="header__barra header__contenedor">
        <Link className="header__logo-link" to="/home">
          <img
            src="../../assets/img/mixtas/logo_f_wbg.png"
            alt="logo"
            width="120"
            loading="lazy"
            decoding="async"
          />
        </Link>
        <div className="header__collapse" onClick={toggleMenu}></div>
        <nav className={`sidebar ${isMenuOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
          <div className="sidebar__close">
            <div className="sidebar__close--wrapper">
              <div className="icon" onClick={toggleMenu}></div>
            </div>
          </div>
          <Link className="sidebar__enlace" to="/home" onClick={() => handleLinkClick()}>{textMap[language].linkOne}</Link>
          <Link className="sidebar__enlace" to="/gallery" onClick={() => handleLinkClick()}>{textMap[language].linkTwo}</Link>
          <Link className="sidebar__enlace" to="/contact" onClick={() => handleLinkClick()}>{textMap[language].linkThree}</Link>
          <div className="sidebar__group">
            <div className="sidebar__social">
              <a
                className="sidebar__social-element"
                href="https://instagram.com/luxury_services.llc"
                target="_blank"
              >
                <span className="sidebar__accesible">Instagram</span>
              </a>
              <a
                className="sidebar__social-element"
                href="https://www.facebook.com/share/1F3WQJhAWq/?mibextid=wwXIfr"
                target="_blank"
              >
                <span className="sidebar__accesible">Facebook</span>
              </a>
              <a
                className="sidebar__social-element"
                href="https://wa.me/16892956352"
                target="_blank"
              >
                <span className="sidebar__accesible">Whatsapp</span>
              </a>
            </div>
            <a className="sidebar__enlace sidebar__enlace-telefono" href="tel:+16892956352">
              <span className="header__phone-number">(+1) 689-295-6352</span>
            </a>
          </div>
          <div className='header__language'>
            <button 
              className='header__language-button' 
              onClick={() => setLanguageHandler('es')} 
              disabled={language === 'es'}
            >
              ES
            </button>
            <button 
              className='header__language-button'
              onClick={() => setLanguageHandler('en')} 
              disabled={language === 'en'}
            >
              EN
            </button>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Header;
