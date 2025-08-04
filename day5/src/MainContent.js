import { CardContainer } from "./CardContainer.js";

export function MainContent({ isSideBarOpen, activeSection }) {
  const sectionContainer = {
    projects: CardContainer,
    placeholder: () => (
      <div>
        <title>Project Title</title>
        <p>Project description</p>
      </div>
    ),
  };

  const ActiveComponent =
    sectionContainer[activeSection] || sectionContainer.placeholder;

  return (
    <main className={isSideBarOpen ? "" : "no-sidebar"}>
      <ActiveComponent />
    </main>
  );
}
