import React from "react";
import { CAT, CountryCollection } from "../components";
import "./contact.css";

function Contact() {
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
            <form action="">
              <div className="contact-us-form-content flex">
                <input
                  type="text"
                  placeholder="name"
                  className="contact-us-form-input "
                />

                <input
                  type="text"
                  placeholder="email address"
                  className="contact-us-form-input "
                />

                <input
                  type="text"
                  placeholder="phone"
                  className="contact-us-form-input "
                />

                <textarea
                  type="text-area"
                  placeholder="your message"
                  className="contact-us-form-input contact-us-form-textarea "
                />
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
