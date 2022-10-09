import React, { useContext, useEffect, useRef, useState } from "react";
import { TodoContext } from "../Contexts/TodoContext";
import { postTodo } from "./CRUD/crud";
import "./todoinput.css";
const TodoInput = () => {
  const [text, setText] = useState("");
  const { handleAddTodos, todos, adding, setAdding, setIsError } =
    useContext(TodoContext);

  const addTodoHandler = () => {
    const postData = {
      title: text,
      status: false,
    };
    setAdding(true);
    postTodo(postData)
      .then((res) => {
        setAdding(false);
        handleAddTodos(res.data);
      })
      .catch((e) => {
        setIsError(true);
        setAdding(false);
      });
    setText("");
  };
  return (
    <div className="todoInputCont">
      <h2>Add New Todo</h2>
      <div className="inputCont">
        <input
          autoFocus
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Add Text Here"
        />
        <button onClick={addTodoHandler} disabled={!text}>
          {adding ? "ADDING..." : "ADD TODO"}
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
