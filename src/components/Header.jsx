import React from "react";
// import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const arrayHeader = [
  { name: "Home", link: "home" },
  { name: "Blog", link: "blogs" },
  { name: "Author", link: "author" },
];

const Header = () => {
  return (
    <div className="header">
      <Nav>
        <Nav.Item>
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default Header;
