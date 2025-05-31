import React, { useRef } from "react";
import style from "../styles/contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "@emailjs/browser";
function Contact() {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uq00gwf",
        "template_ck3cbof",
        formRef.current,
        "wLTNgruv15WiM-R-A"
      )
      .then((suc) => {
        alert(" successfully  submited");
      })
      .catch((err) => {
        alert("Please try with email or whatsapp");
      });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={style.container}>
        <div className={style.options}>
          <article className={style.option}>
            <EmailIcon />
            <h4>Email</h4>
            <h5>veeranagouda961@gmail.com</h5>
            <a href="mailto:veeranagouda961@gmail.com" className={style.span}>
              Send a Message
            </a>
          </article>
          <article className={style.option}>
            <WhatsAppIcon />
            <h4>Whatsapp</h4>
            <h5>9901210621</h5>
            <a
              href="https://api.whatsapp.com/send?phone=919901210621"
              className={style.span}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail} ref={formRef} className={style.form}>
          <input
            type="text"
            className={style.text}
            name="name"
            id="name"
            placeholder=" your name"
            required
          />
          <input
            type="email"
            className={style.text}
            name="email"
            id="email"
            placeholder="your email"
          />
          <textarea
            name="message"
            rows={"7"}
            placeholder="your message"
            className={style.textArea}
            required
          />
          <button type="submit" className="btn btn-primary">
            Send a Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
