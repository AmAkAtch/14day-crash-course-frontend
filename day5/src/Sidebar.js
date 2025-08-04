export function Siderbar({ isOpen, setActiveSection, activeSection }) {
  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <ul>
        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </li>
        <li
          className={activeSection === "placeholders" ? "active" : ""}
          onClick={() => setActiveSection("placeholders")}
        >
          PlaceHolder
        </li>
      </ul>
    </div>
  );
}
