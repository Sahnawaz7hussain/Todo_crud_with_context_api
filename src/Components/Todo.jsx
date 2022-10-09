import React, { useContext, useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { getTodo } from "./CRUD/crud";
import { TodoContext } from "../Contexts/TodoContext";
const Todo = () => {
  const {
    handleGetTodos,
    todos,
    setIsLoading,
    isLoading,
    isError,
    setIsError,
  } = useContext(TodoContext);
  useEffect(() => {
    setIsLoading(true);
    getTodo()
      .then((res) => {
        setIsLoading(false);
        handleGetTodos(res.data);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      {isError && (
        <h3 style={{ textAlign: "center", color: "red" }}>
          Something Wend Wrong
        </h3>
      )}
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
