import axios from "axios";
const getTodo = () => {
  return axios.get("https://fake-json-server-api-sahnawaz.herokuapp.com/tasks");
};
const postTodo = (data) => {
  return axios.post(
    "https://fake-json-server-api-sahnawaz.herokuapp.com/tasks",
    data
  );
};
const deleteTodo = (id) => {
  return axios.delete(
    "https://fake-json-server-api-sahnawaz.herokuapp.com/tasks/" + id
  );
};
const statusUpdate = (id, newStatus) => {
  return axios.patch(
    "https://fake-json-server-api-sahnawaz.herokuapp.com/tasks/" + id,
    {
      status: newStatus,
    }
  );
};
export { getTodo, postTodo, deleteTodo, statusUpdate };
