/* eslint-disable react/jsx-no-target-blank */
import { useRef } from "react";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_ougcs2k",
        form.current,
        "lDXpz9e6P7Qwl4CLQ"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your active email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button type="submit" className="--btn --btn-primary">Send Message</button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+91 1234567890</p>
                </span>
                <span>
                  <FaEnvelope />&nbsp;
                  <p>ecartmart247@gmail.com</p>
                </span>
                <span>
                  <FaLinkedinIn />
                  <p>LinkedIn</p>
                </span>
                <span>
                  <FaInstagram />
                  <p>Instagram</p>
                </span>
                <span>
                  <GoLocation />&nbsp;
                  <p>Bangalore</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
