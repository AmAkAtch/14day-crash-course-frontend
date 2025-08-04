import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header>
      <button onClick={toggleSidebar}>=</button>
      <h1>Youtube</h1>
    </header>
  );
};

export default Header;
