import React from "react";
import { Link } from "react-router-dom";
import './main.css';
const NavBar = () => {
  return (
    <nav className="bg-blue-900/60 backdrop-blur-sm text-white py-4 fixed w-full z-40 px-6">
      <div className="container mx-auto flex items-center  justify-between flex-wrap">
        {/* Website Name */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <a href="/" className="text-2xl font-bold tracking-wide">
            EpicEates
          </a>
        </div>
        {/* Navbar Menu */}
        <div className="md:flex hidden ">
          <a href="/" className="mr-6 navbar-anchor">
            Home
          </a>
          <Link to={`/search/random/all`} className="mr-6 navbar-anchor">
            Recipes
          </Link>
          <a href="about.html" className="mr-6 navbar-anchor">
            About
          </a>
          <a className="navbar-anchor" href="Login.html">Log In</a>
        </div>
        {/* End of Navbar Menu */}
      </div>
    </nav>
  );
};

export default NavBar;
