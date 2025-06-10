import { useState } from "react";
import SolarSystem from "./components/SolarSystem";
import Controls from "./components/Controls";
import "./styles.css";

export default function App() {
  const [speeds, setSpeeds] = useState([1, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2]);

  return (
    <>
      <Controls speeds={speeds} setSpeeds={setSpeeds} />
      <div style={{ width: "100vw", height: "100vh" }}>
        <SolarSystem speeds={speeds} />
      </div>
    </>
  );
}
