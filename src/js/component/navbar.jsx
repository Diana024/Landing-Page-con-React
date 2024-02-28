import React from "react";

//include images into your bundle


//create your first component
const Navbar = () => {
	return (
<nav className="navbar navbar-expand-lg bg-dark">
<div className="container-fluid text-white">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand text-white" href="#">Start Boostrap</a>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white" aria-disabled="true">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white" aria-disabled="true">Contact</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
	);
};

export default Navbar;
