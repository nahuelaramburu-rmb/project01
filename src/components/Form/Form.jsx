import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactUsImage from '../../assets/img/contact-us.jpg';

const Form = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm('Service_key', 'template_Key', form.current, 'Private_key');
      console.log('Email enviado: ', result.text);
    } catch (error) {
      console.error('Error al enviar el email: ', error.text);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="form-container p-4" style={{ flex: '1 1 45%', minWidth: '300px' }}>
          <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-3">
            <input type="text" name="user_name" placeholder="Nombre" className="form-control" required />
            <input type="text" name="user_lastName" placeholder="Apellido" className="form-control" required />
            <input type="email" name="user_email" placeholder="Correo" className="form-control" required />
            <textarea name="message" rows="7" placeholder="Mensaje" className="form-control" required></textarea>
            <button type="submit" className="btn btn-dark mt-3">Send Message</button>
          </form>
        </div>
        <div className="image-container d-none d-md-flex justify-content-center align-items-center" style={{ flex: '1 1 45%', minWidth: '300px' }}>
          <img src={contactUsImage} alt="Photo" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Form;
