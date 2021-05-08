import React from "react";
import SettingsBar from "./components/SettingsBar";
import ToolBar from "./components/ToolBar";
import Canvas from "./components/Canvas";

import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <ToolBar />
      <SettingsBar />
      <Canvas /> 
    </div>
  );
}

export default App;
