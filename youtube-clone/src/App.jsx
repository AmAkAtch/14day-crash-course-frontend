import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";
import { useState } from "react";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarVisible={isSidebarVisible} />
      <MainContent isSidebarVisible={isSidebarVisible} />
    </div>
  );
}

export default App;
