import React from "react";
import { LinkItem, paths } from "../";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  logoLight,
  facebook,
  instagram,
  pinterest,
  youtube,
  twitter,
} from "../../assets";

const socialMediaIcons = [
  { title: "facebook", img: facebook },
  { title: "instagram", img: instagram },
  { title: "pinterest", img: pinterest },
  { title: "youtube", img: youtube },
  { title: "twitter", img: twitter },
];

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="footer-box flex">
          <div className="footer-logo">
            <Link to="/">
              <img src={logoLight} alt="logo" />
            </Link>
          </div>

          <div className="footer-nav">
            <ul className="flex none-list-style">
              {paths.map((path) => (
                <LinkItem key={path} path={path} textColor="text-white" />
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom flex">
          <div className="footer-contact text-gray flex">
            <div className="contact-address">
              <p data-testid="contact-address" className="bold">
                Designo Central Office
              </p>
              <p data-testid="contact-address">3886 Willington Street</p>
              <p data-testid="contact-address">Toronto, Ontario M9C 3J5</p>
            </div>

            <div className="contact-list">
              <p data-testid="contact-list" className="bold">
                Contact Us (Central Office)
              </p>
              <p data-testid="contact-list">P: +1 253-863-8967</p>
              <p data-testid="contact-list">M: contact@designo.co</p>
            </div>
          </div>

          <div className="social-media flex">
            {socialMediaIcons.map(({ title, img }) => (
              <a key={title} href="#!">
                <img data-testid="social-media-img" src={img} alt={title} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
