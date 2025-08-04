import React from "react";

const Sidebar = ({ isSidebarVisible }) => {
  return (
    <div className={`sidebar ${isSidebarVisible ? "" : "isCLosed"}`}>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    </div>
  );
};

export default Sidebar;
