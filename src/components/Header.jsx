import React from "react";
// import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const arrayHeader = [
  { name: "Home", link: "home" },
  { name: "Blog", link: "blogs" },
  { name: "Author", link: "author" },
];

const Header = () => {
  return (
    <div>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};
export default Header;
