import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import logoDark from "./../../assets/shared/desktop/logoDark.png";
import { LinkItem, paths } from "./..";

function Navbar() {
  const [dataVisible, setDataVisible] = useState(false);
  const location = useLocation();

  //close the nav menu when somewhere out of the menu is clicked
  useEffect(() => {
    function closeMenu(e) {
      const nav = e.target.closest(".navigation");
      if (!nav && dataVisible) {
        setDataVisible(false);
      }
    }
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [dataVisible]);

  //close nav menu when route is changed
  useEffect(() => {
    setDataVisible(false);
  }, [location]);

  return (
    <header className="bg-white ">
      <div className="container flex navbar bg-white">
        <div className="logo" data-testid="logo-element">
          <NavLink to="/">
            <img src={logoDark} alt="logo" />
          </NavLink>
        </div>

        <div
          onClick={() =>
            dataVisible ? setDataVisible(false) : setDataVisible(true)
          }
          className="nav-btn"
          data-testid="nav-btn"
        >
          <span data-visible={dataVisible}></span>
        </div>

        <nav className="navigation" data-visible={dataVisible}>
          <ul className="flex none-list-style">
            {paths.map((path) => (
              <LinkItem key={path} path={path} textColor="text-dark" />
            ))}
          </ul>
        </nav>
        <div className="overlay" data-visible={dataVisible}></div>
      </div>
    </header>
  );
}

export default Navbar;
