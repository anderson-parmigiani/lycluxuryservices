import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { useSwipeable } from 'react-swipeable';
import 'animate.css';

Modal.setAppElement('#root');

const GalleryImg = ({ language, proyectos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3);
  const [filteredProyectos, setFilteredProyectos] = useState(proyectos);
  const [selectedButton, setSelectedButton] = useState('all');
  const MAX_VISIBLE_INDICATORS = 4;
  const timerRef = useRef(null);

  useEffect(() => {
    if (!modalIsOpen) {
      startTimer();
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [filteredProyectos.length, modalIsOpen, currentIndex]);

  useEffect(() => {
    updateMinMaxIndexes(currentIndex);
  }, [currentIndex]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      changeProject((prevIndex) => (prevIndex + 1) % filteredProyectos.length);
    }, 30000);
  };

  const changeProject = (newIndex) => {
    setAnimationClass('animate__animated animate__fadeIn animate__faster');
    setTimeout(() => setAnimationClass(''), 500);
    setCurrentIndex(newIndex);
  };

  const openModal = (img, imgIndex) => {
    setSelectedImage(img);
    setModalImageIndex(imgIndex);
    setModalIsOpen(true);
    clearInterval(timerRef.current);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
    startTimer();
  };

  const onTouchStart = () => {
    clearInterval(timerRef.current);
  };

  const onTouchEnd = () => {
    startTimer();
  };

  const galleryHandlers = useSwipeable({
    onSwipedLeft: () => changeProject((currentIndex + 1) % filteredProyectos.length),
    onSwipedRight: () => changeProject((currentIndex - 1 + filteredProyectos.length) % filteredProyectos.length),
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

  const handleDotClick = (index) => {
    changeProject(index);
    startTimer();
  };

  const updateMinMaxIndexes = (current) => {
    if (current < min) {
      setMin(current);
      setMax(current + MAX_VISIBLE_INDICATORS);
      if (max > filteredProyectos.length) {
        setMax(filteredProyectos.length);
      }
    }
    if (current > max) {
      setMax(current);
      setMin(current - MAX_VISIBLE_INDICATORS);
      if (min < 0) {
        setMin(0);
      }
    }
  };

  const getIndicatorClass = (ref) => {
    if (ref === currentIndex) {
      return 'active';
    }
    if (ref >= min && ref <= max) {
      return 'std';
    }
    if (ref === min - 1 || ref === max + 1) {
      return 'small';
    }
    if (ref === min - 2 || ref === max + 2) {
      return 'micro';
    }
    return 'hidden';
  };

  const filterProyectos = (filterType) => {
    setSelectedButton(filterType);
    const lowerCaseFilter = filterType.toLowerCase();
    if (lowerCaseFilter === 'all') {
      setFilteredProyectos(proyectos);
    } else if (lowerCaseFilter === 'acoustic insulation') {
      setFilteredProyectos(proyectos.filter(project =>
        project.descripcion[0].toLowerCase().includes('acoustic') ||
        project.descripcion[0].toLowerCase().includes('acústico') ||
        project.descripcion[0].toLowerCase().includes('aislamiento') ||
        project.descripcion[0].toLowerCase().includes('insulation')
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

  const currentProject = filteredProyectos[currentIndex];
  const currentImages = [
    ...(currentProject?.antes ?? []),
    ...(currentProject?.durante ?? []),
    ...(currentProject?.despues ?? []),
  ];

  const nextModalImage = () => {
    const newIndex = (modalImageIndex + 1) % currentImages.length;
    setModalImageIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
  };

  const prevModalImage = () => {
    const newIndex = (modalImageIndex - 1 + currentImages.length) % currentImages.length;
    setModalImageIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
  };

  const textMap = {
    en: {
      textOne: "Previous",
      textTwo: "In progress",
      textThree: "Completed",
      textFour: "All",
      textFive: "Acoustic Insulation",
      textSix: "Construction / Remodeling",
      textSeven: "Cleaning",
    },
    es: {
      textOne: "Previo",
      textTwo: "En proceso",
      textThree: "Culminado",
      textFour: "Todos",
      textFive: "Aislante Acústico",
      textSix: "Construcción / Remodelación",
      textSeven: "Limpieza",
    }
  };

  return (
    <div
      className="gallery gallery__contenedor"
      {...galleryHandlers}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="gallery__btn">
        <button className={selectedButton === 'all' ? 'gallery__btn-item gallery__btn-item--selected' : 'gallery__btn-item'} onClick={() => filterProyectos('all')}>{textMap[language].textFour}</button>
        <button className={selectedButton === 'acoustic insulation' ? 'gallery__btn-item gallery__btn-item--selected' : 'gallery__btn-item'} onClick={() => filterProyectos('acoustic insulation')}>{textMap[language].textFive}</button>
        <button className={selectedButton === 'construction / remodeling' ? 'gallery__btn-item gallery__btn-item--selected' : 'gallery__btn-item'} onClick={() => filterProyectos('construction / remodeling')}>{textMap[language].textSix}</button>
        <button className={selectedButton === 'cleaning' ? 'gallery__btn-item gallery__btn-item--selected' : 'gallery__btn-item'} onClick={() => filterProyectos('cleaning')}>{textMap[language].textSeven}</button>
      </div>
      <div className="gallery__dots">
        {filteredProyectos.map((_, index) => (
          <span
            key={index}
            className={`gallery__dot ${getIndicatorClass(index)}`}
            onClick={() => handleDotClick(index)}
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
            <h3 className="gallery__project-text">{textMap[language].textOne}</h3>
            <div className="gallery__images">
              {currentProject.antes.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Antes ${index + 1}`}
                  onClick={() => openModal(img, index)}
                />
              ))}
            </div>
          </div>
        )}

        {currentProject?.durante?.length > 0 && (
          <div className="gallery__project">
            <h3 className="gallery__project-text">{textMap[language].textTwo}</h3>
            <div className="gallery__images">
              {currentProject.durante.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Durante ${index + 1}`}
                  onClick={() =>
                    openModal(
                      img,
                      index + (currentProject?.antes?.length || 0)
                    )
                  }
                />
              ))}
            </div>
          </div>
        )}

        {currentProject?.despues?.length > 0 && (
          <div className="gallery__project">
            <h3 className="gallery__project-text">{textMap[language].textThree}</h3>
            <div className="gallery__images">
              {currentProject.despues.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Después ${index + 1}`}
                  onClick={() =>
                    openModal(
                      img,
                      index +
                        (currentProject?.antes?.length || 0) +
                        (currentProject?.durante?.length || 0)
                    )
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {currentImages.length > 1 && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: '85%',
              height: '85%',
              maxWidth: '900px',
              maxHeight: '900px',
              margin: 'auto',
              padding: '0',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <div className="modal__navigation" {...modalHandlers}>
            <button
              onClick={prevModalImage}
              className="modal__button modal__button--prev"
            ></button>
            <div className="modal__image-wrapper">
              <img
                src={selectedImage}
                alt="Project Image"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
            <button
              onClick={nextModalImage}
              className="modal__button modal__button--next"
            ></button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default GalleryImg;
