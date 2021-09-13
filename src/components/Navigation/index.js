import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";

function Navigation() {
  return (
    <nav class="navbar has-background-link is-fixed-top">
      <div class="navbar-brand">
        <div
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <Link to="/home" class="has-text-white is-size-4">
            <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" alt="home"/> Home</Link>
          </div>
          <div class="navbar-item">
            <Link to="/about" class="has-text-white is-size-4">
            <img src="https://img.icons8.com/material-outlined/24/000000/info.png" alt="info"/> About</Link>
          </div>
          <div class="navbar-item">
            <Link to="/services" class="has-text-white is-size-4">
            <img src="https://img.icons8.com/material-outlined/24/000000/service.png" alt="service"/> Services</Link>
          </div>
          <div class="navbar-item">
            <Link to="/resume" class="has-text-white is-size-4">
            <img src="https://img.icons8.com/material-outlined/24/000000/resume.png" alt="resume"/> Resume</Link>
          </div>
          <div class="navbar-item">
            <Link to="/portfolio" class="has-text-white is-size-4">
            <img src="https://img.icons8.com/material-outlined/24/000000/list.png" alt="list"/> Portfolio</Link>
          </div>
          <div class="navbar-item">
            <Link to="/contact" class="has-text-white is-size-4">
            <img src="https://img.icons8.com/material-outlined/24/000000/mail.png" alt="mail"/> Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
