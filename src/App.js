import React, { useState } from "react";
import "./App.css";
import PersonList from "./Components/PersonList";

function App() {
  const [inputText, setInputText] = useState("");
  const [personList, setPersonList] = useState([]);

  const setInputValue = (inputValue) => {
    setInputText(inputValue.target.value);
  };

  const addPersonList = () => {
    const newPersonList = [
      ...personList,
      <PersonList info={inputText} key={personList.length} />,
    ];

    setPersonList(newPersonList);

  };

  return (
    <div className="App">
      <input onChange={setInputValue} />
      <button onClick={addPersonList}>Add Person List</button>
      <div className="person-list">{personList}</div>
    </div>
  );
}

export default App;
