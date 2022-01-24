import React from "react";
import { CAT, AboutCard, CountryCollection, DynamicImg } from "../components";
import {
  talentDesktop,
  talentMobile,
  talentTablet,
  dealDesktop,
  dealTablet,
  dealMobile,
  heroDesktop,
  heroTablet,
  heroMobile,
  bgDesktop,
  bgMobile,
} from "../assets";
import { selectImg } from "../utility/selectImg";
import "./about.css";

function About() {
  const talent = {
    title: "World-class talent",
    p1:
      "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
    p2:
      "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    img: { small: talentMobile, medium: talentTablet, big: talentDesktop },
  };

  const deal = {
    title: "The real deal",
    p1:
      "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
    p2:
      "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
    img: { small: dealMobile, medium: dealTablet, big: dealDesktop },
  };

  return (
    <main className="nav-offset">
      <section className="section-wrap section-about">
        <div className="about-us-intro flex">
          <div className="about-us-img">
            <DynamicImg
              small={heroMobile}
              medium={heroTablet}
              big={heroDesktop}
              name="about us"
            />
          </div>
          <div
            className="about-us-text bg-peach text-white text-center"
            style={{
              backgroundImage: `url(${selectImg(
                bgMobile,
                bgDesktop,
                bgDesktop
              )})`,
            }}
          >
            <h1 className="about-us-text-title text-h1">About us</h1>
            <p className="text-body">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients' audiences.
            </p>
          </div>
        </div>
      </section>

      <section className="section-wrap about-us-talent">
        <AboutCard
          title={talent.title}
          p1={talent.p1}
          p2={talent.p2}
          img={talent.img}
        />
      </section>
      <section className="about-us-countries container">
        <CountryCollection />
      </section>
      <section className="section-wrap about-us-partner">
        <AboutCard
          title={deal.title}
          p1={deal.p1}
          p2={deal.p2}
          img={deal.img}
        />
      </section>
      <section className="about-us-cat container ">
        <CAT />
      </section>
    </main>
  );
}

export default About;
