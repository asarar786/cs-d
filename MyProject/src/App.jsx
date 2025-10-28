import { useState } from "react";
import Vehicle from "./componenet/vehicle.jsx";
import Fruits from "./componenet/Fruits.jsx";
function App() {
  const topics = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn about components, JSX, and props.",
    },
    {
      id: 2,
      title: "React State",
      description: "Understand how state and hooks work in React.",
    },
    {
      id: 3,
      title: "React Events",
      description: "Handle user input and button clicks.",
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [count, setCount] = useState(0);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setCount(0);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Vehicle />
      <Fruits />
      <h1>📘 React Tutorial Topics</h1>

      <ul>
        {topics.map((topic) => (
          <li
            key={topic.id}
            style={{ marginBottom: "10px", cursor: "pointer" }}
          >
            <button
              onClick={() => handleSelectTopic(topic)}
              style={{ padding: "8px 12px" }}
            >
              {topic.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedTopic && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h2>{selectedTopic.title}</h2>
          <p>{selectedTopic.description}</p>

          <div style={{ marginTop: "15px" }}>
            <h3>Counter Example</h3>
            <p>Count: {count}</p>
            <button
              onClick={() => setCount(count + 1)}
              style={{ marginRight: "10px" }}
            >
              ➕ Increase
            </button>
            <button
              onClick={() => setCount(count - 1)}
              style={{ marginRight: "10px" }}
            >
              ➖ Decrease
            </button>
            <button onClick={() => setCount(0)}>🔁 Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
