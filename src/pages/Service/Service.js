import React from "react";
import "./service.css";
import { CAT, ProjectCard, ServiceCard } from "../../components";
import { useParams } from "react-router-dom";
import { services, projectData } from "../../data";
import { useDynamicImg } from "../../hooks";
import { mobileBg } from "../../assets";

function Service() {
  //get service name
  const { service } = useParams();
  const title = service.split("-").join(" ");

  //get service card
  const serviceCards = services.filter(
    (service) => !service.title.includes(title)
  );

  //get projects
  const { pageTitle, description, projects, backGround } = projectData.filter(
    (project) => project.pageTitle === title
  )[0];

  //get background image according to the window size
  const bgImage = useDynamicImg(mobileBg, backGround, backGround);

  return (
    <main className="service-main nav-offset">
      <section className="section-wrap text-center">
        <div
          className="service text-white"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <h1 className="service-title text-h1 capitalize">{pageTitle}</h1>
          <p data-testid="test-body" className="text-body">
            {description}
          </p>
        </div>
      </section>

      <section
        data-testid="project-cards"
        className="service-projects container section-margin grid"
      >
        {projects.map(({ img, title, description }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            projectImg={img}
          />
        ))}
      </section>

      <section
        data-testid="service-cards"
        className="service-cards container grid section-margin"
      >
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

      <section data-testid="service-cat" className="container ">
        <CAT />
      </section>
    </main>
  );
}

export default Service;
