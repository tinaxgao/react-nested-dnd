import "./App.css";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h2>Drag and Drop Test</h2>
        <DragDrop />
      </div>
    </DndProvider>
  );
}

export default App;
