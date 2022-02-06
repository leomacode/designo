import React from "react";
import { errorIcon } from "../../assets";
import "./errorMessage.css";
function ErrorMessage({ msg }) {
  return (
    <div className="contact-error-message">
      <p className="contact-error-message-text">{msg}</p>
      <div className="contact-error-message-icon">
        <img src={errorIcon} alt="error" />
      </div>
    </div>
  );
}

export default ErrorMessage;
