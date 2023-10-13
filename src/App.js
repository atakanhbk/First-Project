import React, { forwardRef, useState } from "react";
import "./App.css";
import PersonList from "./Components/PersonList";
import CreatePerson from "./Components/CreatePerson";
import axios from "axios";


function App() {
  

  const persons = {
    name: "Atakan",
    surname: "Höbek",
  };

  const handleButtonClick = () => {
    axios.post("http://localhost:3004/persons", persons);
  
  };

  const handleEditButtonClick = () => {
    const lastId = 5;
    axios.put(`http://localhost:3004/persons/${lastId}`,{
      name: "Hilal",
      surname: "Arslan",
    })
  }

  return (
    <div className="App">
      <h1>Add Something</h1>
      <CreatePerson />
      <button style={{backgroundColor:"green"}} onClick={handleButtonClick}>Add Something To Api</button>

      <button style={{backgroundColor:"yellow"}} onClick={handleEditButtonClick}>CHANGE LAST ID</button>
    </div>
  );
}

export default App;
