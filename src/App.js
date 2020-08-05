import React from "react";
import "./App.css";
import { ProjectList, Questions } from "./components";
import { GlobalProvider } from "./store/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="Nav">
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1564485715965x221424255250930440%2Ficore_logo_neg.png?w=128&h=24&auto=compress&fit=crop&dpr=1" className="logo"/>
        </div>
        <ProjectList />
        <Questions />
      </div>
    </GlobalProvider>
  );
}

export default App;
