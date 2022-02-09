import React, { useState, useEffect } from "react";
import { CAT, CountryCollection, ErrorMessage } from "../../components";
import "./contact.css";

const validate = (values) => {
  const { name, email, phone, message } = values;
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  let err = {};
  if (!name) {
    err.nameError = "Can not be empty";
  }
  if (!email) {
    err.emailError = "Can not be empty";
  } else if (!validateEmail(email)) {
    err.emailError = "Invalid email";
  }

  if (!phone) {
    err.phoneError = "Can not be empty";
  }
  if (!message) {
    err.messageError = "Can not be empty";
  }

  return err;
};

function Contact({ validateValue = validate }) {
  const values = { name: "", email: "", phone: "", message: "" };
  const [formValues, setFormvalues] = useState(values);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length) {
      setErrors(validateValue(formValues));
    }
    // eslint-disable-next-line
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValue(formValues));
  };

  return (
    <main className="contact nav-offset">
      <div className="contact-us-form-wrap section-wrap">
        <section className="contact-us-form-section flex bg-peach text-white">
          <div className="contact-us-text text-center">
            <h1
              data-testid="contact-us"
              className="contact-us-text-title text-h1 capitalize"
            >
              contact us
            </h1>
            <p
              data-testid="contact-us-body"
              className="contact-us-text-content text-body"
            >
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
                    aria-label="name"
                    placeholder="name"
                    className="contact-us-form-input"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  {errors?.nameError && <ErrorMessage msg={errors.nameError} />}
                </div>
                <div className="contact-us-input-wrapper">
                  <input
                    type="text"
                    name="email"
                    aria-label="email"
                    placeholder="email address"
                    className="contact-us-form-input "
                    value={formValues.email}
                    onChange={handleChange}
                  />

                  {errors?.emailError && (
                    <ErrorMessage msg={errors.emailError} />
                  )}
                </div>
                <div className="contact-us-input-wrapper">
                  <input
                    type="text"
                    name="phone"
                    aria-label="phone"
                    placeholder="phone"
                    className="contact-us-form-input "
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                  {errors?.phoneError && (
                    <ErrorMessage msg={errors.phoneError} />
                  )}
                </div>
                <div className="contact-us-input-wrapper">
                  <textarea
                    type="text-area"
                    name="message"
                    aria-label="message"
                    placeholder="your message"
                    className="contact-us-form-input contact-us-form-textarea "
                    value={formValues.message}
                    onChange={handleChange}
                  />
                  {errors?.messageError && (
                    <ErrorMessage msg={errors.messageError} />
                  )}
                </div>
              </div>
              <div className="contact-us-form-btn-wrap text-center">
                <button
                  type="submit"
                  className="contact-us-form-btn uppercase text-body border-curve btn"
                >
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
