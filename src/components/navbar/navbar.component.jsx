import React from "react";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <span>Select a section:</span>
    <div>
      <span>JavaScript</span>
    </div>
    <div>
      <span>CSS</span>
    </div>
    <div>
      <span>HTML</span>
    </div>
    <div>
      <span>React</span>
    </div>
    <div>
      <span>Redux</span>
    </div>
  </div>
);

export default Navbar;
