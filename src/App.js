import React, { forwardRef, useState } from "react";
import "./App.css";
import PersonList from "./Components/PersonList";

function App() {
  const [inputText, setInputText] = useState("");
  const [personList, setPersonList] = useState([]);

  const setInputValue = (inputValue) => {
    setInputText(inputValue.target.value);
  };

  const addPersonList = () => {
    if (inputText === "") {
      alert("Please Enter A Value");
    } else {
      if (isNameAlreadyExists(inputText)) {
        alert(
          "You cannot add this value because it already exists in the list."
        );
      } else {
        const newPersonList = [
          ...personList,
          <PersonList info={inputText} key={personList.length} />,
        ];
        setPersonList(newPersonList);
        setInputText("");
      
      }
    }
  };

  function isNameAlreadyExists(name) {
    return personList.some((person) => person.props.info === name);
  }

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className="App">
      <h1>Add Something</h1>
      <form onSubmit={handleSubmit}>
        <h2>
          The Thing Will Be Add{" "}
          <input value={inputText} onChange={setInputValue} />
          <button onClick={addPersonList}>Add</button>
        </h2>

        <div className="person-list">{personList}</div>
      </form>
    </div>
  );
}

export default App;
