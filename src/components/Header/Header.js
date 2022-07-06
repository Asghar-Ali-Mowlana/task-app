import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";
import companyLogo from "../../assets/header/Aputure_Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={companyLogo} className="companyLogo" alt="" />
      </div>
      <div className="searchBar">
        <div className="searchInputContainer">
          <input className="searchInput" placeholder="Search" />
        </div>
        <div className="searchIconContainer">
          <AiOutlineSearch size="20px" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
