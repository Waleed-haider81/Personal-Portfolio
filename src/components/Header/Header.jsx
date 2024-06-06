import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="main-header">
      <div className="heading">
        <span>WALEED</span>
        <span> BIN HAIDER</span>
      </div>
      <div className="navbar">
       <a href="" style={{color:'rgb(8, 67, 216)'}}><span>Home</span></a> 
       <a href=""><span>About</span></a> 
      <a href=""><span>Contact</span></a>  
       <a href=""><span>Download</span></a> 
      </div>
    </div>
  );
};

export default Header;
