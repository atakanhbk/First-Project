import React, { forwardRef, useState } from "react";
import "./App.css";
import PersonList from "./Components/PersonList";
import CreatePerson from "./Components/CreatePerson";


function App() {


  return (
    <div className="App">
      <h1>Add Something</h1>
      <CreatePerson/>
 
    </div>
  );
}

export default App;
