"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (id) => `Todo with id ${id} not found`;

const getNewToDoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewToDoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeToDoById = (todos, id) => {
  const todo = todos.find((item) => item[todoKeys.id] === id);
  if (todo === undefined) {
    console.error(errTodoNotFound(id));
    return null;
  }

  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteToDoById = (todos, id) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === id);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(id));
    return todos;
  }

  todos.splice(todoIndex, 1);
  return todos;
};

const editToDoById = (todos, id, newText) => {
  const todo = todos.find((item) => item[todoKeys.id] === id);
  if (todo === undefined) {
    console.error(errTodoNotFound(id));
    return null;
  }

  todo[todoKeys.text] = newText;
  return todo;
};

createTodo(todos, "Задача");
console.log(todos);
