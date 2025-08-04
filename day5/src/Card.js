export function Card({ isExpanded, onClick, title, description }) {
  return (
    <div className={`card ${isExpanded ? "expanded" : ""}`} onClick={onClick}>
      <h2>{title}</h2>
      <div className="expanded-wrapper">
        <p>{description}</p>
      </div>
    </div>
  );
}
