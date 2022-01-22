import React from "react";
import { CAT, AboutCard } from "../components";
import { talentDesktop, talentMobile, talentTablet } from "../assets";
import "./about.css";

function About() {
  function selectImg(small, medium, big) {
    let img = medium;
    if (window.innerWidth < 640) {
      img = small;
    }

    if (window.innerWidth > 960) {
      img = big;
    }
    return img;
  }

  const talent = {
    title: "World-class talent",
    p1:
      "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
    p2:
      "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    img: selectImg(talentMobile, talentTablet, talentDesktop),
  };

  console.log(talent.title);
  return (
    <main className="nav-offset">
      <section className="section-wrap section-about">
        <div className="about-us flex">
          <div className="about-us-img">
            <img src="" alt="about us" />
          </div>
          <div className="about-text">
            <h1 className="about-text-title text-h1">About us</h1>
            <p className="text-body"></p>
          </div>
        </div>
      </section>

      <section className="section-wrap section-talent">
        <AboutCard
          title={talent.title}
          p1={talent.p1}
          p2={talent.p2}
          img={talent.img}
        />
      </section>
      <section className="section-countries"></section>
      <section className="section-wrap section-partner"></section>
      <section className="container ">
        <CAT />
      </section>
    </main>
  );
}

export default About;
