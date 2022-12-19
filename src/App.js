import { useContext } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import { TodoContext } from "./Contexts/TodoContext";

function App() {
  document.title = "Basic Todo App";
  const todo = useContext(TodoContext);
  console.log(todo);
  return (
    <div className="App">
      <h2>Todo App</h2>
      <Todo />
    </div>
  );
}

export default App;
