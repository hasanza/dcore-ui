import React from "react";
import "./App.css";
import { ProjectList, Questions } from "./components";
import { GlobalProvider } from "./store/GlobalState";
import {FaRegUserCircle} from "react-icons/fa";
import {FaPowerOff} from 'react-icons/fa';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="Nav">
          <img alt="dcore" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1564485715965x221424255250930440%2Ficore_logo_neg.png?w=128&h=24&auto=compress&fit=crop&dpr=1" className="logo"/>
          <ul className="links">
            <li>Profile</li>
            <li>Nominate</li>
            <li>Support</li>
          </ul>
          <div className="user">
            <FaRegUserCircle style={{marginRight: "10px", height: "30px", width: "30px", color: "cyan"}}/>
            <p style={{marginRight: "10px", cursor: "pointer"}}>John Marston</p>
            <FaPowerOff style={{cursor: "pointer"}}/>
          </div>
        </div>
        <ProjectList />
        <Questions />
      </div>
    </GlobalProvider>
  );
}

export default App;
