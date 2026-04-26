import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ language, setLanguageHandler }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';
  const [headerIsDark, setHeaderIsDark] = useState(false);
  const [overHero, setOverHero] = useState(false);
  const rafRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((s) => !s);

  const textMap = {
    en: {
      linkOne: 'Home',
      linkTwo: 'Project Gallery',
      linkThree: 'Contact us'
    },
    es: {
      linkOne: 'Inicio',
      linkTwo: 'Galería de Proyectos',
      linkThree: 'Contáctanos'
    }
  };

  const handleLinkClick = () => setIsMenuOpen(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let sampleImg = null;
    let cancelledSample = false;
    let currentCheckId = 0;

    const sampleImageDarkness = (url) => {
      return new Promise((resolve) => {
        try {
          const img = new Image();
          sampleImg = img;
          img.crossOrigin = 'Anonymous';
          img.src = url;
          img.onload = () => {
            if (cancelledSample) return resolve(false);
            try {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              const w = 80, h = 80;
              canvas.width = w; canvas.height = h;
              ctx.drawImage(img, 0, 0, w, h);
              const data = ctx.getImageData(0, 0, w, h).data;
              let total = 0, count = 0;
              for (let i = 0; i < data.length; i += 32) {
                const r = data[i], g = data[i + 1], b = data[i + 2];
                const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
                total += lum; count++;
              }
              const avg = (total / count) / 255;
              resolve(avg < 0.5);
            } catch (e) {
              resolve(false);
            }
          };
          img.onerror = () => resolve(false);
        } catch (e) {
          resolve(false);
        }
      });
    };

    const computeHeroDarkness = async () => {
      const heroEl = document.querySelector('.hero');
      if (!heroEl) return false;
      const style = getComputedStyle(heroEl);
      const bg = style.backgroundImage || '';

      if (bg.includes('linear-gradient')) {
        const rgbaMatches = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d?.?\d*)?\)/g) || [];
        for (const m of rgbaMatches) {
          const parts = m.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d?.?\d*)?\)/);
          if (!parts) continue;
          const r = +parts[1], g = +parts[2], b = +parts[3];
          const a = parts[4] ? +parts[4] : 1;
          const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
          if (lum < 0.5 && a > 0.15) {
            return true;
          }
        }
      }

      const urlMatch = bg.match(/url\((?:(?:"|')?)(.*?)(?:(?:"|')?)\)/);
      if (urlMatch && urlMatch[1]) {
        return await sampleImageDarkness(urlMatch[1].replace(/(^\"|\"$)/g, ''));
      }

      const bgColor = style.backgroundColor || '';
      const m = bgColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (m) {
        const r = +m[1], g = +m[2], b = +m[3];
        const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        return lum < 0.5;
      }

      return false;
    };

    const rectsOverlap = (rectA, rectB) => {
      return rectA.top < rectB.bottom && rectA.bottom > rectB.top;
    };

    const resetState = () => {
      setOverHero(false);
      setHeaderIsDark(false);
    };

    const checkHeaderTheme = async () => {
      const checkId = ++currentCheckId;
      const headerEl = document.querySelector('header');
      const servicesEl = document.querySelector('.services');
      const heroEl = document.querySelector('.hero');
      if (!headerEl) return resetState();

      const headerRect = headerEl.getBoundingClientRect();
      if (servicesEl) {
        const servicesRect = servicesEl.getBoundingClientRect();
        if (rectsOverlap(headerRect, servicesRect)) {
          setOverHero(true);
          setHeaderIsDark(true);
          return;
        }
      }

      if (heroEl) {
        const heroRect = heroEl.getBoundingClientRect();
        if (rectsOverlap(headerRect, heroRect)) {
          const isDark = await computeHeroDarkness();
          if (cancelledSample || checkId !== currentCheckId) return;
          setOverHero(true);
          setHeaderIsDark(isDark);
          return;
        }
      }

      resetState();
    };

    const onScrollOrResize = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(async () => {
        await checkHeaderTheme();
        rafRef.current = null;
      });
    };

    checkHeaderTheme();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      cancelledSample = true;
      if (sampleImg) sampleImg.src = '';
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [location.pathname]);

  const headerClasses = ['header'];
  if (overHero) {
    headerClasses.push('header--over-hero');
    headerClasses.push(headerIsDark ? 'header--is-dark' : 'header--is-light');
  }
  if (isMenuOpen) {
    headerClasses.push('header--sidebar-open');
  }

  return (
    <header className={headerClasses.join(' ')}>
      {isMenuOpen && <div className="header__overlay" onClick={toggleMenu}></div>}
      <div className="header__barra header__contenedor">
        <Link className="header__logo-link" to="/home">
          <img
            className="header__logo-img"
            src="../../assets/img/mixtas/logo_f_wbg.png"
            alt="logo"
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
