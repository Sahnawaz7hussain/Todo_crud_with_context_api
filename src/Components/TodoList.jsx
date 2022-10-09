import React, { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";
import { getTodo, deleteTodo, statusUpdate } from "./CRUD/crud";
import Home_loading from "../Images/Home_loading.gif";
const TodoList = () => {
  const {
    todos,
    handleGetTodos,
    isLoading,
    setIsLoading,
    deleting,
    setDeleting,
    updating,
    setUpdating,
    isError,
    setIsError,
  } = useContext(TodoContext);
  const deleteTodoHandler = (id) => {
    setDeleting(true);
    deleteTodo(id)
      .then((res) => {
        getTodo().then((res) => {
          setDeleting(false);
          handleGetTodos(res.data);
        });
      })
      .catch((e) => {
        setIsError(true);
        setDeleting(false);
      });
  };
  const statusUpdateHandler = (id, newStatus) => {
    setUpdating(true);
    statusUpdate(id, newStatus)
      .then((res) => {
        getTodo()
          .then((res) => {
            setUpdating(false);
            handleGetTodos(res.data);
          })
          .catch((e) => {
            setIsError(true);
            setUpdating(false);
          });
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
        setUpdating(false);
      });
  };

  return (
    <div className="listMainCont">
      <h3
        style={{ textAlign: "center", marginBottom: "15px", marginTop: "10px" }}
      >
        Your Todos
      </h3>
      {isLoading && todos.length === 0 && (
        <img className="loadingIMG" src={Home_loading} alt="Loading..." />
      )}
      {deleting && (
        <h3 style={{ textAlign: "center", color: "red" }}>DELETING...</h3>
      )}
      {updating && (
        <h3 style={{ textAlign: "center", color: "orange" }}>UPDATING...</h3>
      )}
      {todos && (
        <div className="todosListContainer">
          {todos &&
            todos.reverse().map((el) => {
              return (
                <div className="todosList" key={el.id}>
                  <h3 className="listTitle">{el.title}</h3>
                  <button
                    className="listButton"
                    onClick={() => statusUpdateHandler(el.id, !el.status)}
                  >
                    {el.status ? "Done" : "Not Done"}
                  </button>
                  <button
                    className="listButton"
                    onClick={() => deleteTodoHandler(el.id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default TodoList;
