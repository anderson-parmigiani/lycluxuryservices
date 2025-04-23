import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const refScrollUp = useRef();

  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      return savedLanguage;
    }

    const browserLanguage = navigator.language || navigator.languages[0];
    return browserLanguage.startsWith('es') ? 'es' : 'en';
  };

  const [language, setLanguage] = useState(getInitialLanguage());

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguageHandler = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
      <ScrollToTop />
      <div ref={refScrollUp}>
        <Header language={language} setLanguageHandler={setLanguageHandler} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/home" element={<Home language={language} />} />
          <Route path="/gallery" element={<Gallery language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
};

export default App;
