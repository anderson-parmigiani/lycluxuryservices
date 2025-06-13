import { Link } from 'react-router-dom';

const Footer = ({ language }) => {
  const textMap = {
    en: {
      textOne: "All rights reserved.",
      textTwo: "Home",
      textThree: "Project Gallery",
      textFour: "Contact us",
      textFive: "Designed by ParanDev."
    },
    es: {
      textOne: "Todos los derechos reservados.",
      textTwo: "Inicio",
      textThree: "Galería de Proyectos",
      textFour: "Contáctanos",
      textFive: "Diseñado por ParanDev."
    }
  };

  return (
    <footer className="footer">
      <div className="footer__contenedor">

        <div className="footer__grid">
          <div className="footer__copyright">
            <span className="footer__copyright-content">
              © L&C Luxury Services LLC {new Date().getFullYear()}. {textMap[language].textOne}
            </span>
          </div>

          <div className="footer__address">
            <span className="footer__address-content">
              Winter Park, Florida.
            </span>
          </div>

          <div className="footer__design-by">
            <a 
              className="footer__design-by"
              href="https://anderson-parmigiani.github.io/portfolio/"
              target="_blank">
                {textMap[language].textFive}
            </a>
          </div>

          <nav className="footer__nav-pages">
            <Link className="" to="/home">{textMap[language].textTwo}</Link>
            <Link className="" to="/gallery">{textMap[language].textThree}</Link>
            <Link className="" to="/contact">{textMap[language].textFour}</Link>
          </nav>

          <nav className='footer__nav-social'>
            <div className="sidebar__social sidebar__social--footer">
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
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
