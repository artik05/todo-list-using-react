import { useState } from "react";
import "./styles.css";
import TodoList from "./TodoList";

//Take the Name and Gender of the todo and add it to the below list. Also, todo can delete it.
export default function App() {
  const [todos, settodos] = useState([]); // to store todo date
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [priority, setPriority] = useState("low");

  const handleClick = () => {
    const tempList = todos.concat({
      id: todos.length + 1,
      title: title,
      startDate: startDate,
      priority: priority
    });

    settodos(tempList);
  };

  const handleRemove = (id) => {
    const tempList = todos.filter((item) => item.id !== id);

    settodos(tempList);
  };

  return (
    <div className="App">
      <h2>Add New Todo</h2>
      <div>
        <label>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Start Date</label>
        <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div>
        <label>Priority</label>
        <select onChange={(e) => setPriority(e.target.value)}>
          <option value="low" selected>
            Low
          </option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <button onClick={(e) => handleClick(e)}>Add</button>
      </div>

      <TodoList todos={todos} handleRemove={handleRemove} />
    </div>
  );
}
