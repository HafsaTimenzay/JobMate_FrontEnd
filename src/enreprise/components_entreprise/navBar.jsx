import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../../styles/sidebar.css";
import profileImg from "../../assets/images/profile.jpg";
import Logo from "../../components/logo";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg topNav px-3 custom-fixed-top" style={{ height: "auto" }}>
      
      {/* Logo */}
      <div className="d-flex align-items-center">
        <Logo />
      </div>

      {/* Search Bar */}
     

      {/* Profile Image */}
      <div className="ms-auto d-flex align-items-center">
        <button className="outside-btn me-2">Add A Jobs</button>
        <a href="#profile" className="nav-link mx-3 active navItemTop">
          <img src={profileImg} className="img-fluid profile" alt="profile" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;