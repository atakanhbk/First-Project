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
    console.log(inputText);

    if (inputText === "") {
      alert("Please Enter A Value");
    } else {
      const newPersonList = [
        ...personList,
        <PersonList info={inputText} key={personList.length} />,
      ];
      setInputText("");
      setPersonList(newPersonList);
    }
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={inputText} onChange={setInputValue} />
        <button onClick={addPersonList}>Add Person List</button>
        <div className="person-list">{personList}</div>
      </form>
    </div>
  );
}

export default App;
