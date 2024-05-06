import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../images/photo-camera.png";

export default function Nav() {
  const nav = useNavigate();
  return (
    <>
      <nav className="nav">
        <div className="nav-links">
          <Link to="/" className="nav-detail">
            Home
          </Link>
          <Link to="/events" className="nav-detail">
            Events
          </Link>
          <Link to="/travels" className="nav-detail">
            Travel
          </Link>
          <Link to="/about" className="nav-detail last">
            About
          </Link>
        </div>
        <div className="logo-container">
          <label className="label">Erik</label>
          <img
            onClick={() => nav("/")}
            className="logo"
            src={Logo}
            alt="Logo"
          />
          <label className="label">Site</label>
        </div>
      </nav>
    </>
  );
}
