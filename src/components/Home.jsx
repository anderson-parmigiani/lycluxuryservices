import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useSwipeable } from 'react-swipeable';

const Home = ({ language }) => {
  const textMap = {
    en: {
      textOne: "Premium Construction & Remodeling Services",
      textTwo: "Get a free consultation",
      textThree: "In the hands of professionals...",
      textFour: "We have over 5 years of experience as a contractor in the field of construction and renovation of spaces, both interior and exterior. We take pride in our meticulous dedication, consistent professionalism, and strong sense of responsibility in every project we undertake. We work diligently to ensure client satisfaction, offering personalized solutions tailored to the specific needs and expectations of each client. Our commitment to quality has enabled us to develop successful projects across the United States, providing exceptional service and meeting the highest industry standards. We believe that the key to our success lies in our ability to innovate and continuously improve, driving us to overcome challenges and create spaces that truly transform our clients' lives.",
      textFive: "\u00A0\u00A0\u00A0\u00A0\u00A0Our Services\u00A0\u00A0\u00A0\u00A0\u00A0",
      textSix: "ACOUSTIC INSULATION",
      textSeven: "FRAMING",
      textEight: "CEILING",
      textNine: "ROOFING",
      textTen: "FLOORING",
      textEleven: "DRYWALL",
      textTwelve: "DUCTS INSTALLATION",
      textThirteen: "WINDOWS / DOORS INSTALLATION",
      textFourteen: "PAINTING",
      textFifteen: "DEEP CLEANING",
      textSixteen: "Ensure a quieter and more comfortable environment with our acoustic insulation solutions. We help reduce noise levels and improve soundproofing for both residential and commercial spaces.",
      textSeventeen: "We provide expert framing services (wood and steel), creating sturdy and reliable structures that form the backbone of any building project. From walls to roof framing, we’ve got you covered.",
      textEighteen: "Transform your ceilings with our professional services. Whether you need repairs, installations, or modern finishes, we deliver exceptional results tailored to your preferences.",
      textNineteen: "Protect your property with our high-quality roofing services. We specialize in installations, repairs, and maintenance to ensure your roofing system lasts for years.",
      textTwenty: "Upgrade your floors with our premium flooring solutions, including installations, repairs, and replacements. From hardwood to tiles, we handle it all with precision and care.",
      textTwentyOne: "Achieve flawless walls and ceilings with our drywall installation and repair services. We ensure smooth finishes, perfect for painting or decorating.",
      textTwentyTwo: "Enjoy improved air circulation and energy efficiency with our duct installation services. We ensure proper setup to optimize your HVAC system.",
      textTwentyThree: "Enhance your property’s aesthetics and functionality with our window and door installation services. We provide seamless installations with energy efficiency in mind.",
      textTwentyFour: "Revitalize your space with our professional painting services. Whether interior or exterior, we use high-quality paints and techniques to bring your vision to life.",
      textTwentyFive: "Achieve a sparkling clean space with our deep cleaning services. We pay attention to every detail, making your property fresh, hygienic, and inviting.",
      textTwentySix: "Testimonials",
      textTwentySeven: "I recently had acoustic wall panels installed in my company. The process was seamless and the team was incredibly professional. They arrived on time, completed the work efficiently, and left my place spotless. The sound reduction is amazing, and I couldn’t be happier with the result. Highly recommend!",
      textTwentyEight: "The acoustic ceiling panels insulation service was a great choice for us. The team was very meticulous, ensuring that every detail was handled with care. The results were impressive, and the noise levels have significantly reduced. I would definitely recommend this service to anyone looking to improve their soundproofing.",
      textTwentyNine: "They did a fantastic job installing both the ceiling and the air conditioner ducts. The team was very responsive and knowledgeable, and they made sure everything was done correctly. The new ceiling looks great, and the air conditioning system works perfectly. We’re very satisfied!",
      textThirty: "The kitchen remodeling project exceeded my expectations. The workers were very skilled and kept the work area tidy throughout the project. The final result is stunning, and the quality of the materials used is top-notch. My kitchen now feels like a new space, and I love it!",
      textThirtyOne: "Make your project a reality.",
      textThirtyTwo: "LET'S TALK",
      textThirtyThree: "We hired the deep cleaning service for our store and we were very satisfied. The team was punctual, very thorough, and left every corner spotless, even in the hardest-to-reach areas. The environment now feels much more pleasant for both customers and staff. We will definitely call them again!",
      textThirtyFour: "We requested a cleaning service and the result was excellent. The team worked with great dedication and left everything sparkling clean, even the areas that are usually overlooked. Our customers noticed the difference right away. Highly recommended!"
    },
    es: {
      textOne: "Servicios Premium de Construcción & Remodelación",
      textTwo: "Obtén una consulta gratuita",
      textThree: "En manos de profesionales...",
      textFour: "Contamos con más de 5 años de experiencia en el campo de la construcción y remodelación de espacios, tanto interiores como exteriores. Nos enorgullece nuestra dedicación meticulosa, profesionalidad constante y un gran sentido de responsabilidad en cada uno de los proyectos que emprendemos. Trabajamos arduamente para asegurar la satisfacción de nuestros clientes, ofreciendo soluciones personalizadas que se adaptan a las necesidades y expectativas específicas de cada uno. Nuestro compromiso con la calidad nos ha permitido desarrollar proyectos exitosos en todos los Estados Unidos, brindando un servicio excepcional y cumpliendo con los más altos estándares del sector. Creemos que la clave de nuestro éxito reside en nuestra capacidad para innovar y mejorar continuamente, impulsándonos a superar los desafíos y a crear espacios que realmente transforman la vida de nuestros clientes.",
      textFive: "Nuestros Servicios",
      textSix: "AISLAMIENTO ACÚSTICO",
      textSeven: "ESTRUCTURAS",
      textEight: "TECHOS",
      textNine: "TEJADOS",
      textTen: "PISOS",
      textEleven: "PANELES DE YESO",
      textTwelve: "INSTALACIÓN DE CONDUCTOS DE AIRE",
      textThirteen: "INSTALACIÓN DE VENTANAS / PUERTAS",
      textFourteen: "PINTURA",
      textFifteen: "LIMPIEZA PROFUNDA",
      textSixteen: "Asegura un ambiente más tranquilo y confortable con nuestras soluciones de aislamiento acústico. Ayudamos a reducir los niveles de ruido y mejorar la insonorización tanto en espacios residenciales como comerciales.",
      textSeventeen: "Ofrecemos servicios de estructuras expertas (madera y acero), creando estructuras robustas y confiables que forman la columna vertebral de cualquier proyecto de construcción. Desde paredes hasta estructuras de techo, ¡nosotros nos encargamos!",
      textEighteen: "Transforma tus techos con nuestros servicios profesionales. Ya sea que necesites reparaciones, instalaciones o acabados modernos, ofrecemos resultados excepcionales adaptados a tus preferencias.",
      textNineteen: "Protege tu propiedad con nuestros servicios de tejados de alta calidad. Nos especializamos en instalaciones, reparaciones y mantenimiento para garantizar que tu sistema de tejado dure años.",
      textTwenty: "Actualiza tus pisos con nuestras soluciones de pisos premium, incluyendo instalaciones, reparaciones y reemplazos. Desde madera hasta azulejos, manejamos todo con precisión y cuidado.",
      textTwentyOne: "Logra paredes y techos impecables con nuestros servicios de instalación y reparación de paneles de yeso. Garantizamos acabados suaves, perfectos para pintar o decorar.",
      textTwentyTwo: "Disfruta de una mejor circulación de aire y eficiencia energética con nuestros servicios de instalación de conductos. Nos aseguramos de una configuración adecuada para optimizar tu sistema de HVAC.",
      textTwentyThree: "Mejora la estética y funcionalidad de tu propiedad con nuestros servicios de instalación de ventanas y puertas. Realizamos instalaciones sin problemas con la eficiencia energética en mente.",
      textTwentyFour: "Revitaliza tu espacio con nuestros servicios profesionales de pintura. Ya sea interior o exterior, utilizamos pinturas y técnicas de alta calidad para dar vida a tu visión.",
      textTwentyFive: "Logra un espacio reluciente con nuestros servicios de limpieza profunda. Prestamos atención a cada detalle, haciendo que tu propiedad esté fresca, higiénica y acogedora.",
      textTwentySix: "Testimonios",
      textTwentySeven: "Recientemente instalé paneles acústicos en mi empresa. El proceso fue impecable y el equipo fue increíblemente profesional. Llegaron a tiempo, completaron el trabajo eficientemente y dejaron mi lugar impecable. La reducción del sonido es increíble y no podría estar más feliz con el resultado. ¡Muy recomendable!",
      textTwentyEight: "El servicio de aislamiento de paneles acústicos en el techo fue una excelente elección para nosotros. El equipo fue muy meticuloso, asegurándose de que cada detalle se manejara con cuidado. Los resultados fueron impresionantes y los niveles de ruido se han reducido significativamente. Definitivamente recomendaría este servicio a cualquiera que busque mejorar su insonorización.",
      textTwentyNine: "Hicieron un trabajo fantástico instalando tanto el techo como los conductos del aire acondicionado. El equipo fue muy receptivo y conocedor, y se aseguraron de que todo se hiciera correctamente. El nuevo techo se ve genial y el sistema de aire acondicionado funciona perfectamente. ¡Estamos muy satisfechos!",
      textThirty: "El proyecto de remodelación de la cocina superó mis expectativas. Los trabajadores eran muy hábiles y mantuvieron el área de trabajo ordenada durante todo el proyecto. El resultado final es impresionante y la calidad de los materiales utilizados es de primera. ¡Mi cocina ahora se siente como un espacio nuevo y me encanta!",
      textThirtyOne: "Haz realidad tu proyecto.",
      textThirtyTwo: "HABLEMOS",
      textThirtyThree: "Contratamos el servicio de limpieza profunda para nuestra tienda y quedamos muy satisfechos. El equipo fue puntual, muy detallista y dejó cada rincón impecable, incluso en las áreas más difíciles de alcanzar. Ahora el ambiente es mucho más agradable tanto para los clientes como para el personal. ¡Sin duda los volveremos a llamar!",
      textThirtyFour: "Solicitamos una limpieza y el resultado fue excelente. El equipo trabajó con mucha dedicación y dejó todo reluciente, incluso las áreas que normalmente se pasan por alto. Nuestros clientes notaron la diferencia de inmediato. ¡Muy recomendados!"
    }
  };

  const testimonialsData = [
    {
      textKey: 'textTwentySeven',
      author: 'Robert Hendricks — Augusta, GA',
    },
    {
      textKey: 'textThirty',
      author: 'Peter Morris — Indianapolis, IN',
    },
    {
      textKey: 'textTwentyNine',
      author: 'Keira Fletcher — Lake Mary, FL',
    },
    {
      textKey: 'textThirtyFour',
      author: 'Carol Rodriguez — St. Augustine, FL',
    },
    {
      textKey: 'textTwentyEight',
      author: 'Allie Castillo — Orlando, FL',
    },
    {
      textKey: 'textThirtyThree',
      author: 'Maria Gonzales — Sanford, FL',
    },
  ];

  useEffect(() => {
    const links = document.querySelectorAll('.accordion-link');
    const handleAccordionClick = function(event) {
      event.preventDefault();
      const answerDiv = this.nextElementSibling;
      const isOpen = answerDiv.style.maxHeight;
      document.querySelectorAll('.answer').forEach((answer) => {
        if (answer !== answerDiv) {
          answer.style.maxHeight = null;
          answer.previousElementSibling.querySelector('.ion-md-arrow-forward').style.display = 'block';
          answer.previousElementSibling.querySelector('.ion-md-arrow-down').style.display = 'none';
        }
      });
      answerDiv.style.maxHeight = isOpen ? null : answerDiv.scrollHeight + 'px';
      this.querySelector('.ion-md-arrow-forward').style.display = isOpen ? 'block' : 'none';
      this.querySelector('.ion-md-arrow-down').style.display = isOpen ? 'none' : 'block';
    };

    links.forEach(link => link.addEventListener('click', handleAccordionClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleAccordionClick));
    };
  }, []);

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const timerRef = useRef(null);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setTestimonialIndex((prev) =>
        prev === 0 ? testimonialsData.length - 2 : prev - 2
      );
      setFade(true);
      startTimer();
    }, 10);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setTestimonialIndex((prev) =>
        prev + 2 >= testimonialsData.length ? 0 : prev + 2
      );
      setFade(true);
      startTimer();
    }, 10);
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTestimonialIndex((prev) =>
          prev + 2 >= testimonialsData.length ? 0 : prev + 2
        );
        setFade(true);
      }, 10);
    }, 30000);
  };

  useEffect(() => {
    setFade(true);
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const onTouchStart = () => {
    clearInterval(timerRef.current);
  };

  const onTouchEnd = () => {
    startTimer();
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <main className="principal">
      <Helmet>
        <title>L&C Luxury Services | Contractor</title>
        <meta
          name="description"
          content="We have over 5 years of experience as a contractor in construction and renovation of spaces, both interior and exterior, across the United States."
        />
      </Helmet>
      <section className="hero">
        <h1 className="hero__heading">{textMap[language].textOne}</h1>
        <Link className="hero__button" to="/contact">{textMap[language].textTwo}</Link>
      </section>

      <section className="about">
        <div className="about__contenedor">
          <h2 className="about__heading">{textMap[language].textThree}</h2>
          <div className="about__content">
            <img
              className="about__imagen"
              src="../../assets/img/mixtas/galeria/ig15_9_durante.avif"
              alt="imagen about"
              width="120"
              height="120"
              loading="lazy"
              decoding="async"
            />
            <p className="about__text">{textMap[language].textFour}</p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services__contenedor">
          <h2 className="services__heading">{textMap[language].textFive}</h2>
          <div className="services__content">
            <div className="accordion">
              <div className="accordion-item" id="question1">
                <a className="accordion-link">
                  <div className="flex">
                    <h3>{textMap[language].textSix}</h3>
                    <ul>
                    </ul>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>{textMap[language].textSixteen}</p>
                </div>
                <hr />
              </div>
              <div className="accordion-item" id="question2">
                <a className="accordion-link">
                  <div>
                    <h3>{textMap[language].textSeven}</h3>
                    <ul>
                    </ul>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>{textMap[language].textSeventeen}</p>
                </div>
                <hr />
              </div>
              <div className="accordion-item" id="question3">
                <a className="accordion-link">
                  <div className="flex">
                    <h3>{textMap[language].textEight}</h3>
                    <ul>
                    </ul>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>{textMap[language].textEighteen}</p>
                </div>
                <hr />
              </div>
              <div className="accordion-item" id="question4">
                <a className="accordion-link">
                  <div>
                    <h3>{textMap[language].textNine}</h3>
                    <ul>
                    </ul>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>{textMap[language].textNineteen}</p>
                </div>
                <hr />
              </div>
              <div className="accordion-item" id="question5">
                <a className="accordion-link">
                  <div>
                    <h3>{textMap[language].textTen}</h3>
                    <ul>
                    </ul>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>{textMap[language].textTwenty}</p>
                </div>
                <hr />
              </div>
              <div className="accordion-item" id="question6">
                <a className="accordion-link">
                  <div>
                    <h3>{textMap[language].textEleven}</h3>
                    <ul>
                    </ul>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>{textMap[language].textTwentyOne}</p>
                </div>
                <hr />
              </div>
              <div className="accordion-item" id="question7">
                <a className="accordion-link">
                  <div className="flex">
                    <h3>{textMap[language].textTwelve}</h3>
                    <ul>
                    </ul>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>{textMap[language].textTwentyTwo}</p>
                </div>
                <hr />
              </div>
              <div className="accordion-item" id="question8">
                <a className="accordion-link">
                  <div>
                    <h3>{textMap[language].textThirteen}</h3>
                    <ul>
                    </ul>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>{textMap[language].textTwentyThree}</p>
                </div>
                <hr />
              </div>
              <div className="accordion-item" id="question9">
                <a className="accordion-link">
                  <div>
                    <h3>{textMap[language].textFourteen}</h3>
                    <ul>
                    </ul>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>{textMap[language].textTwentyFour}</p>
                </div>
                <hr />
              </div>
              <div className="accordion-item" id="question10">
                <a className="accordion-link">
                  <div>
                    <h3>{textMap[language].textFifteen}</h3>
                    <ul>
                    </ul>
                  </div>
                  <i className="icon ion-md-arrow-forward"></i>
                  <i className="icon ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <p>{textMap[language].textTwentyFive}</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='testimonials'>
        <h2 className="testimonials__heading">{textMap[language].textTwentySix}</h2>
        <div className="testimonials__slider"
          {...swipeHandlers}           
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="testimonials__arrow-group">
            <button
              className="testimonials__arrow testimonials__arrow--left"
              onClick={handlePrev}
              aria-label="Previous testimonials"
            >
            </button>
            <button
              className="testimonials__arrow testimonials__arrow--right"
              onClick={handleNext}
              aria-label="Next testimonials"
            >
            </button>
          </div>
        <div className="testimonials__contenedor">
          {testimonialsData
            .slice(testimonialIndex, testimonialIndex + 2)
            .map((testimonial, idx) => (
              <div
                className={`testimonial${fade ? ' testimonial--fade' : ''}`}
                key={testimonial.textKey}
              >
                <blockquote>
                  {textMap[language][testimonial.textKey]}
                </blockquote>
                <div></div>
                <p>{testimonial.author}</p>
              </div>
            ))}
        </div>

        </div>
      </section>
      <section className='contactus'>
        <div className="contactus__contenedor">
          <h3 className="contactus__heading">{textMap[language].textThirtyOne}</h3>
          <Link className="contactus__button" to="/contact">{textMap[language].textThirtyTwo}</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
