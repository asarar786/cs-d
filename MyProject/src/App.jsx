import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>ABES ENGINEERING COLLEGE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> At ABES Engineering College, we ignite
          the flames of curiosity, knowledge, and innovation. Established over
          two decades ago under the esteemed Society for Educational Excellence,
          our institution has evolved into a dynamic center of learning nestled
          in the heart of Ghaziabad. Our unwavering commitment to excellence has
          garnered us noteworthy positions in the National Institute Ranking
          Framework (NIRF), a testament to our dedication to quality education.
        </p>
      </div>
      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
