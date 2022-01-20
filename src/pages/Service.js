import React from "react";
import "./service.css";
import { CAT, ProjectCard, ServiceCard } from "./../components";
import { useParams } from "react-router-dom";
import { airfilter } from "../assets";
import { services } from "../data/homeData";

function Service() {
  const { service } = useParams();
  const title = service.split("-").join(" ");
  const serviceCards = services.filter(
    (service) => !service.title.includes(title)
  );

  console.log(serviceCards);
  return (
    <main className="service-main nav-offset">
      <section className="section-wrap text-center">
        <div className="service text-white">
          <h1 className="service-title text-h1 capitalize">{title}</h1>
          <p className="text-body">
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences
          </p>
        </div>
      </section>

      <section className="service-projects container">
        <ProjectCard
          title="express"
          description="Solving the problem of poor indoor air quality by filtering the air"
          projectImg={airfilter}
        />
      </section>

      <section className="services container section-margin grid">
        {serviceCards.map(({ title, img, imgM, imgL, imgS }) => (
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

      <section className="container ">
        <CAT />
      </section>
    </main>
  );
}

export default Service;
