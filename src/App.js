import React from "react";
import "./App.css";
import { ProjectList, Questions } from "./components";
import { GlobalProvider } from "./store/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <ProjectList />
        <Questions />
      </div>
    </GlobalProvider>
  );
}

export default App;
