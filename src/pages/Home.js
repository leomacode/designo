import React from "react";
import { CAT, Button } from "./../components";
import { heroPhone } from "./../assets/home/desktop";

import "./home.css";

function Home() {
  return (
    <main className="nav-offset">
      <section className="hero container">
        <h1 className="hero-heading text-h1">
          Award-winning custom designs and digital branding solutions
        </h1>

        <p className="sub-heading">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button path="about" btnText="learn more" btnTheme="btn-dark" />
        <div className="hero-img">
          <img src={heroPhone} alt="phone" />
        </div>
      </section>

      <section className="services"></section>
      <section className="features"></section>
      <section className="container">
        <CAT />
      </section>
    </main>
  );
}

export default Home;
