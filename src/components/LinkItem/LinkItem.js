import React from "react";
import { NavLink } from "react-router-dom";
function LinkItem({ path, textColor }) {
  return (
    <li>
      <NavLink className={`linkItem text-nav ${textColor}`} to={path}>
        {path.toUpperCase()}
      </NavLink>
    </li>
  );
}

export default LinkItem;
