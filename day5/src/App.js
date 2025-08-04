import "./App.css";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Siderbar } from "./Sidebar";
import { useState } from "react";

function App() {
  //set initial state of the sidebar
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("projects");

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="App">
      <Header toggleSideBar={toggleSideBar} />
      <Siderbar
        isOpen={isSideBarOpen}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <MainContent
        isSideBarOpen={isSideBarOpen}
        activeSection={activeSection}
      />
    </div>
  );
}

export default App;
