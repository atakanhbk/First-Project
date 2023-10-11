import PersonList from "./PersonList";
import { useState } from "react";

function CreatePerson() {

    const [inputText, setInputText] = useState("");
    const [personList, setPersonList] = useState([]);
  
    const setInputValue = (inputValue) => {
      setInputText(inputValue.target.value);
    };
  
    const addPersonList = () => {
      if (inputText.trim() ==="") {
        alert("Please Enter A Value");

      } else {
        if (isNameAlreadyExists(inputText)) {
          alert("ALREADY HAVE");
        } else {
          const newPersonList = [
            ...personList,
            <PersonList info={inputText} key={personList.length} />,
          ];
          setPersonList(newPersonList);
         
        }
      }
      setInputText("");
    };
  
    function isNameAlreadyExists(name) {
      return personList.some(
        (person) =>
          person.props.info.toLowerCase() === name.toLowerCase()
      );
    }
  
    const handleSubmit = (e) => e.preventDefault();
  return (
    <div>
      
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

export default CreatePerson;
