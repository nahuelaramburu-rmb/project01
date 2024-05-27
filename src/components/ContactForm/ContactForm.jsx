import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactUsImage from "../../assets/imagenes/contact-us.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div
          className="form-container p-4"
          style={{ flex: "1 1 45%", minWidth: "300px" }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="d-flex flex-column gap-3"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              className="form-control"
              required
            />
            <input
              type="text"
              name="user_lastName"
              placeholder="Apellido"
              className="form-control"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Correo"
              className="form-control"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Mensaje"
              className="form-control"
              required
            ></textarea>
            <button type="submit" className="btn btn-dark mt-3">
              Send Message
            </button>
          </form>
        </div>
        <div
          className="image-container d-none d-md-flex justify-content-center align-items-center"
          style={{ flex: "1 1 45%", minWidth: "300px" }}
        >
          <img src={contactUsImage} alt="Photo" className="img-fluid" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
