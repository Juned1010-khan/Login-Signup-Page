import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div style={{backgroundColor:"black" , height:"70px"}} class="container-fluid">
        <a style={{color:"white"}} class="navbar-brand" href="#">
          My Website
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div  class="navbar-nav">
            <a style={{color:"white"}} class="nav-link active"  aria-current="page" href="#">
              Home
            </a>
            <a style={{color:"white"}} class="nav-link" href="#">
              Features
            </a>
            <a style={{color:"white"}} class="nav-link" href="#">
              Pricing
            </a>
            <a style={{color:"white"}} class="nav-link" href="#">
              Practice
            </a>
            <div className="d-flex">
              <Link  to="/login" className="btn btn-danger">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar2;
