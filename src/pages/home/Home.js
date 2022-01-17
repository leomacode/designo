import React from "react";
import { CAT, Button, ServiceCard, FeatureCard } from "./../../components";
import { passionate } from "./../../assets/home";
import { services, features } from "./homeData";
import "./home.css";

function Home() {
  return (
    <main className="nav-offset text-center home-main">
      <section className="section-wrap">
        <div className="hero border-curve flex">
          <div className="hero-text text-white">
            <h1 className="hero-heading text-h1">
              Award-winning custom designs and digital branding solutions
            </h1>

            <p className="hero-sub-heading">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>

            <div className="home-btn">
              <Button path="about" btnText="learn more" btnTheme="btn-dark" />
            </div>
          </div>

          <div className="hero-img"></div>
        </div>
      </section>

      <section className="services container section-margin">
        {services.map(({ title, img, imgM, imgL, imgS }) => (
          <ServiceCard
            key={title}
            title={title}
            img={img}
            imgM={imgM}
            imgL={imgL}
            imgS={imgS}
          />
        ))}
      </section>

      <section className="features container section-margin">
        {features.map(({ title, img, text }) => (
          <FeatureCard key={title} title={title} imgUrl={img} text={text} />
        ))}
      </section>

      <section className="container ">
        <CAT />
      </section>
    </main>
  );
}

export default Home;
