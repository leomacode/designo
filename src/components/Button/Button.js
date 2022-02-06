import React from "react";
import { HashLink } from "react-router-hash-link";
import "./button.css";
function Button({ btnText, path, btnTheme }) {
  return (
    <div className="btn-wrap uppercase text-body">
      <HashLink smooth to={`/${path}`} className={`btn ${btnTheme} text-btn`}>
        {btnText}
      </HashLink>
    </div>
  );
}

export default Button;
