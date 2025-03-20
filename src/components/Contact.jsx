import z from 'zod';
import { useState, useEffect } from 'react';

const Contact = ({ language }) => {
  const textMap = {
    en: {
      textOne: "Send us a message!",
      textTwo: "Full Name",
      textThree: "Email Address",
      textFour: "Message",
      textFive: "Send",
      textSix: "Name",
      textSeven: "Email",
      textEight: "Write a message...",
      textNine: "Sent!",
      textTen: "We will respond as soon as possible.",
      errorOne: "Name is required",
      errorTwo: "Invalid name",
      errorThree: "Name must contain at least 2 character(s)",
      errorFour: "Name must not exceed 50 characters",
      errorFive: "Email address is required",
      errorSix: "Invalid email address",
      errorSeven: "Message is required",
      errorEight: "Invalid message",
      errorNine: "Message must be at least 10 characters long",
      errorTen: "Message must not exceed 1500 characters"
    },
    es: {
      textOne: "¡Envíanos un mensaje!",
      textTwo: "Nombre Completo",
      textThree: "Email",
      textFour: "Mensaje",
      textFive: "Enviar",
      textSix: "Nombre",
      textSeven: "Correo",
      textEight: "Escribe un mensaje...",
      textNine: "¡Enviado!",
      textTen: "Te responderemos a la brevedad posible.",
      errorOne: "El nombre es requerido",
      errorTwo: "Nombre inválido",
      errorThree: "El nombre debe contener al menos 2 caracteres",
      errorFour: "El nombre no debe exceder los 50 caracteres",
      errorFive: "La dirección de correo electrónico es requerida",
      errorSix: "Dirección de correo electrónico inválida",
      errorSeven: "El mensaje es requerido",
      errorEight: "Mensaje inválido",
      errorNine: "El mensaje debe tener al menos 10 caracteres",
      errorTen: "El mensaje no debe exceder los 1500 caracteres"
    },
  }

  const nameSchema = z.string({
    required_error: textMap[language].errorOne,
    invalid_type_error: textMap[language].errorTwo,
  }).min(2, textMap[language].errorThree).max(50, textMap[language].errorFour);

  const emailSchema = z.string({
    required_error: textMap[language].errorFive,
    invalid_type_error: textMap[language].errorSix,
  }).email(textMap[language].errorSix);

  const messageSchema = z.string({
    required_error: textMap[language].errorSeven,
    invalid_type_error: textMap[language].errorEight,
  }).min(10, textMap[language].errorNine).max(1500, textMap[language].errorTen);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState(textMap[language].textFive);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    setButtonText(textMap[language].textFive);
  }, [language]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    let validationError = '';
    try {
      switch (name) {
        case 'name':
          nameSchema.parse(value);
          break;
        case 'email':
          emailSchema.parse(value);
          break;
        case 'message':
          messageSchema.parse(value);
          break;
        default:
          break;
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        validationError = err.errors[0].message;
      }
    }

    setErrors({
      ...errors,
      [name]: validationError,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    try {
      nameSchema.parse(formData.name);
    } catch (err) {
      if (err instanceof z.ZodError) {
        validationErrors.name = err.errors[0].message;
      }
    }

    try {
      emailSchema.parse(formData.email);
    } catch (err) {
      if (err instanceof z.ZodError) {
        validationErrors.email = err.errors[0].message;
      }
    }

    try {
      messageSchema.parse(formData.message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        validationErrors.message = err.errors[0].message;
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    
    setButtonText(textMap[language].textNine);
    setIsButtonDisabled(true);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...formData })
    })
    .then(() => {
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setButtonText(textMap[language].textFive);
          setIsButtonDisabled(false);
        }, 5000);
      })
      .catch(error => {
        setButtonText(textMap[language].textFive);
        setIsButtonDisabled(false);
        console.error("Error al enviar el mensaje: " + error);
      });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  return (
    <section className="section_10">
      <div className="responsive-container-block container">
        <h2 className="form-heading">{textMap[language].textOne}</h2>
        <p className="form-text">{textMap[language].textTen}</p>
        <form id="iox4" name="contactForm" netlify-honeypot="bot-field" data-netlify="true" onSubmit={handleSubmit}>
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div className="responsive-container-block form-container">
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 first-name" id="i10mt-5">
              <p className="text-blk input-title">
                {textMap[language].textTwo}
              </p>
              <input
                className="input"
                id="name"
                name="name"
                placeholder={textMap[language].textSix}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p className="text-blk input-title">
                {textMap[language].textThree}
              </p>
              <input
                className="input"
                id="email"
                name="email"
                placeholder={textMap[language].textSeven}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-5">
              <p className="text-blk input-title">
                {textMap[language].textFour}
              </p>
              <textarea
                className="textinput"
                id="message"
                name="message"
                placeholder={textMap[language].textEight}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="error-message error-message__textarea">{errors.message}</p>}
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
              <button
                className={isButtonDisabled ? "submit-btn disabled" : "submit-btn"}
                id="w-c-s-bgc_p-1-dm-id-3"
                type="submit"
                disabled={isButtonDisabled}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
