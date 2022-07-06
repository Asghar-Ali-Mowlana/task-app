import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="buttonContainer">
        <div className="buttonIcon">
          <IoMdAdd size="20px" color="white" />
        </div>
        <div className="buttonText">Add Task</div>
      </div>
    </div>
  );
};

export default Footer;
