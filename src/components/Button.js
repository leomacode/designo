import React from "react";
import { Link } from "react-router-dom";
import "./button.css";
function Button({ btnText, path, btnTheme }) {
  return (
    <div className="cat-btn uppercase text-body">
      <Link to={path} className={`btn ${btnTheme}`}>
        {btnText}
      </Link>
    </div>
  );
}

export default Button;
