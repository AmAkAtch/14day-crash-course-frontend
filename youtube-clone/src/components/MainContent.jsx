import React from "react";
import VideoList from "./VideoList.jsx";
import Video from "./VIdeo.jsx";
import Description from "./Description.jsx";

const MainContent = ({ isSidebarVisible }) => {
  return (
    <main className={isSidebarVisible ? "" : "isClose"}>
      <Video />
      <Description />
      <VideoList />
    </main>
  );
};

export default MainContent;
