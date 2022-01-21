import React from "react";
import "./service.css";
import { CAT, ProjectCard, ServiceCard } from "./../components";
import { useParams } from "react-router-dom";
import { services } from "../data/homeData";
import { projectData } from "../data/serviceData";

function Service() {
  const { service } = useParams();
  const title = service.split("-").join(" ");

  const serviceCards = services.filter(
    (service) => !service.title.includes(title)
  );

  const { pageTitle, description, projects } = projectData.filter(
    (project) => project.pageTitle === title
  )[0];

  return (
    <main className="service-main nav-offset">
      <section className="section-wrap text-center">
        <div className="service text-white">
          <h1 className="service-title text-h1 capitalize">{pageTitle}</h1>
          <p className="text-body">{description}</p>
        </div>
      </section>

      <section className="service-projects container">
        {projects.map(({ img, title, description }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            projectImg={img}
          />
        ))}
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
