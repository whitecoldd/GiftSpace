import React, { useState, useEffect } from "react";
import "./App.css";
import TableComponent from "./Table/Table";
import Roadmap from "./Roadmap/Roadmap";
import WheelOfFortune from "./Wheel/WheelOfFortune";
import Modal from "react-modal";
import { Container } from "react-bootstrap";
function App() {
  const [Open, setOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "20%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "auto",
      color: "white",
      background: "linear-gradient(269.39deg, #141620 1.86%, #102B46 97.36%)",
      borderRadius: "20px",
    },
    overlay: { zIndex: 1000 },
  };
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        setOpen(!Open);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);
  return (
    <>
      <button onClick={() => setOpen(!Open)}>Wheel</button>

      <Roadmap />
      <TableComponent />
      <Modal isOpen={Open} style={customStyles}>
        <WheelOfFortune Open={Open} setOpen={setOpen} />
      </Modal>
    </>
  );
}

export default App;
