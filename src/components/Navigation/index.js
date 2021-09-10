import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation(props) {   

    return (
        <nav class="navbar is-link is-fixed-top">
        <div class="navbar-brand">
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="#home">
                <span class="icon">
                  <i class="fas fa-home"></i>
                </span>
                <NavLink to="/home">Home </NavLink>
              </a>
            <a class="navbar-item" href="#about">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
              <NavLink to="/about">About </NavLink>
            </a>
            <a class="navbar-item" href="#services">
              <span class="icon">
                <i class="fas fa-bars"></i>
              </span>
              <NavLink to="/service">Service </NavLink>
            </a>
            <a class="navbar-item" href="#resume">
              <span class="icon">
                <i class="fas fa-file-alt"></i>
              </span>
              <NavLink to="/resume">Resume </NavLink>
            </a>
            <a class="navbar-item" href="#portfolio">
              <span class="icon">
                <i class="fas fa-th-list"></i>
              </span>
              <NavLink to="/portfolio">Portfolio </NavLink>
            </a>
            <a class="navbar-item" href="#contact">
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
              <NavLink to="/contact">Contact </NavLink>
            </a>
          </div>
        </div>
      </nav>
  );
}

export default Navigation;