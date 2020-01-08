import React from "react";
import Logo from "../Img/Lambda_Logo_white.png";

const Header = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={Logo} alt="Lambda's logo" />
    </div>
  );
};

export default Header;