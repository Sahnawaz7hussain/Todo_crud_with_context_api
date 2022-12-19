import axios from "axios";
let base_url = "https://fake-json-apis.onrender.com/api/todos";
const getTodo = () => {
  return axios.get(base_url);
};
const postTodo = (data) => {
  return axios.post(base_url, data);
};
const deleteTodo = (id) => {
  return axios.delete(`${base_url}/${id}`);
};
const statusUpdate = (id, newStatus) => {
  return axios.patch(`${base_url}/${id}`, {
    status: newStatus,
  });
};
export { getTodo, postTodo, deleteTodo, statusUpdate };
