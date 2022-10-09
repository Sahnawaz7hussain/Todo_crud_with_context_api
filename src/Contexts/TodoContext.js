import React, { createContext, useState } from "react";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);
  const handleGetTodos = (data) => {
    setTodos(data);
  };
  const handleAddTodos = (data) => {
    setTodos([...todos, data]);
  };

  return (
    <TodoContext.Provider
      value={{
        handleGetTodos,
        handleAddTodos,
        todos,
        isLoading,
        setIsLoading,
        adding,
        setAdding,
        deleting,
        setDeleting,
        updating,
        setUpdating,
        isError,
        setIsError,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };
