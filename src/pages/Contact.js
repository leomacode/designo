import React, { useState } from "react";
import { CAT, CountryCollection } from "../components";
import "./contact.css";

function Contact() {
  const values = { name: "", email: "", phone: "", message: "" };
  const [formValues, setFormvalues] = useState(values);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
    validate(formValues);
  };

  const validate = (values) => {
    const { name, email, phone, message } = values;
    if (!name) {
      setErrors({ ...errors, nameError: "Can not be empty" });
    }
    // !email && setErrors({ ...errors, emailError: "Can not be empty" });
    // !phone && setErrors({ ...errors, phoneError: "Can not be empty" });
    if (!message) {
      setErrors({ ...errors, messageError: "Can not be empty" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formValues);
    console.log(errors);
  };

  return (
    <main className="contact nav-offset">
      <div className="contact-us-form-wrap section-wrap">
        <section className="contact-us-form-section flex bg-peach text-white">
          <div className="contact-us-text text-center">
            <h1 className="contact-us-text-title text-h1 capitalize">
              contact us
            </h1>
            <p className="contact-us-text-content text-body">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <div className="contact-us-form">
            <form onSubmit={handleSubmit}>
              <div className="contact-us-form-content flex">
                <div className="contact-us-input-wrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="contact-us-form-input"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-us-input-wrapper">
                  <input
                    type="text"
                    name="email"
                    placeholder="email address"
                    className="contact-us-form-input "
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-us-input-wrapper">
                  <input
                    type="text"
                    name="phone"
                    placeholder="phone"
                    className="contact-us-form-input "
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-us-input-wrapper">
                  <textarea
                    type="text-area"
                    name="message"
                    placeholder="your message"
                    className="contact-us-form-input contact-us-form-textarea "
                    value={formValues.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-us-form-btn-wrap text-center">
                <button className="contact-us-form-btn uppercase text-body border-curve">
                  submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <section className="contact-us-section-countries">
        <CountryCollection />
      </section>
      <section className="contact-us-section-cat container ">
        <CAT />
      </section>
    </main>
  );
}

export default Contact;
