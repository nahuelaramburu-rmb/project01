import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactUsImage from "../../assets/imagenes/contact-us.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";


const ContactForm = () => {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_v2ms748",
        "template_crgep7n",
        form.current,
        "2KYxDrI2XZTk92AHv"
      );
      toast.success("Su formulario ha sido enviado");
      form.current.reset();
    } catch (error) {
      toast.error("Hubo un error al enviar el formulario. Inténtelo de nuevo.");
    }
  };

  return (
    <div className="w-100">
        <div className="d-flex align-items-center vh-100">
          <div className="container d-flex flex-wrap justify-content-between">
            <div className="form-container col-12 col-md-6 p-4 ">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="d-flex flex-column gap-3 "
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Nombre"
                  className="form-control form-control-custom mx-auto"
                  required
                />
                <input
                  type="text"
                  name="user_lastName"
                  placeholder="Telefono"
                  className="form-control form-control-custom mx-auto"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Correo"
                  className="form-control form-control-custom mx-auto"
                  required
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Mensaje"
                  className="form-control form-control-custom mx-auto"
                  required
                ></textarea>
                <button type="submit" className="btn btn-custom mx-auto">
                  Enviar
                </button>
              </form>
            </div>
            <div className="image-container col-12 col-md-6 d-none d-md-flex justify-content-center align-items-center">
              <img src={contactUsImage} alt="Photo" className="img-fluid" />
            </div>
            </div>
          <ToastContainer />
        </div>
  </div>
  );
};

export default ContactForm;
