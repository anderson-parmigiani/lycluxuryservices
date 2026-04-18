import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Modal from 'react-modal';
import { useSwipeable } from 'react-swipeable';
import 'animate.css';

Modal.setAppElement('#root');

const GalleryImg = ({ language, proyectos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3);
  const [filteredProyectos, setFilteredProyectos] = useState(proyectos || []);
  const [selectedButton, setSelectedButton] = useState('all');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const timerRef = useRef(null);
  const MAX_VISIBLE_INDICATORS = 4;

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    if (!filteredProyectos || filteredProyectos.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredProyectos.length);
    }, 10000);
  }, [filteredProyectos]);

  const updateMinMaxIndexes = useCallback((current) => {
    const visible = MAX_VISIBLE_INDICATORS;
    let newMin = Math.max(0, current - Math.floor(visible / 2));
    let newMax = newMin + visible - 1;
    if (newMax > (filteredProyectos.length - 1)) {
      newMax = filteredProyectos.length - 1;
      newMin = Math.max(0, newMax - visible + 1);
    }
    setMin(newMin);
    setMax(newMax);
  }, [filteredProyectos]);

  useEffect(() => {
    setFilteredProyectos(proyectos || []);
    setCurrentIndex(0);
    setSelectedButton('all');
  }, [proyectos]);

  useEffect(() => {
    if (!modalIsOpen && !isVideoPlaying) {
      startTimer();
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [filteredProyectos.length, modalIsOpen, isVideoPlaying, startTimer]);

  useEffect(() => {
    updateMinMaxIndexes(currentIndex);
  }, [currentIndex, updateMinMaxIndexes]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const changeProject = (value) => {
    setAnimationClass('animate__animated animate__fadeIn animate__faster');
    setTimeout(() => setAnimationClass(''), 500);
    if (typeof value === 'function') {
      setCurrentIndex(value);
    } else {
      setCurrentIndex(value);
    }
  };

  const filterProyectos = (filterType) => {
    setSelectedButton(filterType);
    const lowerCaseFilter = (filterType || '').toLowerCase();
    if (lowerCaseFilter === 'all') {
      setFilteredProyectos(proyectos);
    } else if (lowerCaseFilter === 'acoustic insulation') {
      setFilteredProyectos(proyectos.filter(project =>
        project.descripcion[0].toLowerCase().includes('acoustic') ||
        project.descripcion[0].toLowerCase().includes('acústico') ||
        project.descripcion[0].toLowerCase().includes('aislamiento') ||
        project.descripcion[0].toLowerCase().includes('insulation') ||
        project.descripcion[0].toLowerCase().includes('phenolic') ||
        project.descripcion[0].toLowerCase().includes('fenólicos')
      ));
    } else if (lowerCaseFilter === 'construction / remodeling') {
      setFilteredProyectos(proyectos.filter(project =>
        !project.descripcion[0].toLowerCase().includes('cleaning') &&
        !project.descripcion[0].toLowerCase().includes('limpieza')
      ));
    } else if (lowerCaseFilter === 'cleaning') {
      setFilteredProyectos(proyectos.filter(project =>
        project.descripcion[0].toLowerCase().includes('cleaning') ||
        project.descripcion[0].toLowerCase().includes('limpieza')
      ));
    }
    setCurrentIndex(0);
  };

  const getIndicatorClass = (ref) => {
    if (ref === currentIndex) return 'active';
    if (ref >= min && ref <= max) return 'std';
    if (ref === min - 1 || ref === max + 1) return 'small';
    if (ref === min - 2 || ref === max + 2) return 'micro';
    return 'hidden';
  };

  const handleDotClick = (index) => {
    changeProject(index);
    startTimer();
  };

  const currentProject = filteredProyectos[currentIndex];
  const currentMedia = useMemo(() => {
    const arr = [];
    (currentProject?.antes || []).forEach(src => arr.push({ type: 'image', src }));
    (currentProject?.durante || []).forEach(src => arr.push({ type: 'image', src }));
    (currentProject?.despues || []).forEach(src => arr.push({ type: 'image', src }));
    (currentProject?.videos || []).forEach(src => arr.push({ type: 'video', src }));
    return arr;
  }, [currentProject]);

  const modalVideoRef = useRef(null);

  const openModal = (mediaIndex) => {
    if (!currentMedia || currentMedia.length === 0) return;
    const idx = Math.max(0, Math.min(mediaIndex, currentMedia.length - 1));
    setModalImageIndex(idx);
    setModalIsOpen(true);
    clearInterval(timerRef.current);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImageIndex(0);
    startTimer();
  };

  const nextModalImage = () => {
    if (!currentMedia || currentMedia.length === 0) return;
    setModalImageIndex(prev => (prev + 1) % currentMedia.length);
  };

  const prevModalImage = () => {
    if (!currentMedia || currentMedia.length === 0) return;
    setModalImageIndex(prev => (prev - 1 + currentMedia.length) % currentMedia.length);
  };

  useEffect(() => {
    if (!modalIsOpen) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') nextModalImage();
      if (e.key === 'ArrowLeft') prevModalImage();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modalIsOpen, currentMedia]);

  const onTouchStart = () => clearInterval(timerRef.current);
  const onTouchEnd = () => startTimer();

  const galleryHandlers = useSwipeable({
    onSwipedLeft: () => changeProject(prev => (prev + 1) % filteredProyectos.length),
    onSwipedRight: () => changeProject(prev => (prev - 1 + filteredProyectos.length) % filteredProyectos.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const modalHandlers = useSwipeable({
    onSwipedLeft: () => nextModalImage(),
    onSwipedRight: () => prevModalImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    stopPropagation: true,
  });

  const textMap = {
    en: {
      textOne: "Previous",
      textTwo: "In progress",
      textThree: "Completed",
      textFour: "All",
      textFive: "Acoustic Insulation",
      textSix: "Construction / Remodeling",
      textSeven: "Cleaning",
      textEight: "Videos",
      textNine: "Gallery"
    },
    es: {
      textOne: "Previo",
      textTwo: "En proceso",
      textThree: "Culminado",
      textFour: "Todos",
      textFive: "Aislante Acústico",
      textSix: "Construcción / Remodelación",
      textSeven: "Limpieza",
      textEight: "Videos",
      textNine: "Galería"
    }
  };

  return (
    <div
      className="gallery gallery__contenedor"
      {...galleryHandlers}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <h2 className="gallery__heading">{textMap[language]?.textNine}</h2>

      <div className="gallery__btn">
        <button className={selectedButton === 'all' ? 'gallery__btn-item gallery__btn-item--selected' : 'gallery__btn-item'} onClick={() => filterProyectos('all')}>{textMap[language]?.textFour}</button>
        <button className={selectedButton === 'acoustic insulation' ? 'gallery__btn-item gallery__btn-item--selected' : 'gallery__btn-item'} onClick={() => filterProyectos('acoustic insulation')}>{textMap[language]?.textFive}</button>
        <button className={selectedButton === 'construction / remodeling' ? 'gallery__btn-item gallery__btn-item--selected' : 'gallery__btn-item'} onClick={() => filterProyectos('construction / remodeling')}>{textMap[language]?.textSix}</button>
        <button className={selectedButton === 'cleaning' ? 'gallery__btn-item gallery__btn-item--selected' : 'gallery__btn-item'} onClick={() => filterProyectos('cleaning')}>{textMap[language]?.textSeven}</button>
      </div>

      <div className="gallery__dots">
        {filteredProyectos.map((_, index) => (
          <span
            key={index}
            className={`gallery__dot ${getIndicatorClass(index)}`}
            onClick={() => handleDotClick(index)}
            role="button"
            tabIndex={0}
          ></span>
        ))}
      </div>

      <div className="gallery__section">
        <div className="gallery__description">
          <p className="gallery__description-text">{currentProject?.descripcion}</p>
          <p className="gallery__description-location">{currentProject?.ubicacion}</p>
        </div>

        {currentProject?.antes?.length > 0 && (
          <div className="gallery__project">
            <h3 className="gallery__project-text">{textMap[language]?.textOne}</h3>
            <div className="gallery__images">
              {currentProject.antes.map((img, index) => (
                <button key={`antes-${index}`} className="gallery__thumb" onClick={() => openModal(index)} aria-label={`Open image ${index + 1}`}>
                  <img src={img} alt={`${currentProject?.descripcion?.[0] || ''} - ${index + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}

        {currentProject?.durante?.length > 0 && (
          <div className="gallery__project">
            <h3 className="gallery__project-text">{textMap[language]?.textTwo}</h3>
            <div className="gallery__images">
              {currentProject.durante.map((img, index) => (
                <button key={`durante-${index}`} className="gallery__thumb" onClick={() => openModal(index + (currentProject?.antes?.length || 0))} aria-label={`Open image ${index + 1}`}>
                  <img src={img} alt={`${currentProject?.descripcion?.[0] || ''} - ${index + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}

        {currentProject?.despues?.length > 0 && (
          <div className="gallery__project">
            <h3 className="gallery__project-text">{textMap[language]?.textThree}</h3>
            <div className="gallery__images">
              {currentProject.despues.map((img, index) => (
                <button key={`despues-${index}`} className="gallery__thumb" onClick={() => openModal(index + (currentProject?.antes?.length || 0) + (currentProject?.durante?.length || 0))} aria-label={`Open image ${index + 1}`}>
                  <img src={img} alt={`${currentProject?.descripcion?.[0] || ''} - ${index + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}

          {currentProject?.videos?.length > 0 && (
            <div className="gallery__project">
              <h3 className="gallery__project-text">{textMap[language]?.textEight}</h3>
              <div className="gallery__images">
                {currentProject.videos.map((video, index) => {
                  const mediaIndex = (currentProject?.antes?.length || 0) + (currentProject?.durante?.length || 0) + index;
                  return (
                    <button key={`video-${index}`} className="gallery__thumb video-thumb" onClick={() => openModal(mediaIndex)} aria-label={`Open video ${index + 1}`}>
                      <video src={video} muted preload="metadata" playsInline />
                      <span className="video__play-overlay">▶</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        contentLabel="Image viewer"
      >
        <div className="modal__inner" {...modalHandlers}>
          <button className="modal__close" onClick={closeModal} aria-label="Close">×</button>
          <button className="modal__button modal__button--prev" onClick={prevModalImage} aria-label="Previous">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div className="modal__image-wrapper">
            {currentMedia && currentMedia.length > 0 ? (
              currentMedia[modalImageIndex].type === 'image' ? (
                <img src={currentMedia[modalImageIndex].src} alt={`${currentProject?.descripcion?.[0] || ''} - ${modalImageIndex + 1}`} />
              ) : (
                <div className="modal__video-wrap">
                  <video
                    ref={modalVideoRef}
                    src={currentMedia[modalImageIndex].src}
                    controls
                    controlsList="nodownload"
                    autoPlay
                  />
                  <button className="modal__fullscreen" onClick={() => {
                    const el = modalVideoRef.current;
                    if (el && el.requestFullscreen) el.requestFullscreen();
                  }} aria-label="Fullscreen">⤢</button>
                </div>
              )
            ) : (
              <div className="modal__empty">No media</div>
            )}
            <div className="modal__caption">{currentProject?.descripcion?.[0]} — {currentProject?.ubicacion} ({modalImageIndex + 1}/{currentMedia?.length || 0})</div>
          </div>

          <button className="modal__button modal__button--next" onClick={nextModalImage} aria-label="Next">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryImg;
