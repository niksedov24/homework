export const getTodosFromLS = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const setTodosFromLS = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
