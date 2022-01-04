import React, { useState } from "react";

const App = () => {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])

  const onChange = (event) => {
    setToDo(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "" && toDo.length > 5)
    {
      return;
    }
    setToDo("")
    setToDos((currentArray) => [toDo, ...currentArray])
  }
  console.log(toDos)

  return (
    <div>
      <h1>My TO-DOS ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type={"text"}
          placeholder="Write your to do ..."
        />
        <button type="submit">Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}
export default App;