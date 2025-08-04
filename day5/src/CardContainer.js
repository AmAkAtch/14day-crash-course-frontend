import { useState } from "react";
import { Card } from "./Card.js";

export function CardContainer() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  const cards = [
    { title: "Summer", description: "This book is about summer" },
    { title: "winter", description: "This book is about winter" },
    { title: "Monsoon", description: "This book is about Monsoon" },
  ];
  return (
    <div>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            isExpanded={expandedIndex === index}
            onClick={() => handleClick(index)}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
