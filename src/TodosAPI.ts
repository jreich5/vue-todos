import type { Todo } from "./interfaces";

const domain = "http://localhost:3000";
const resource = "todos";

export const findAll = async () => {
  const todos: Array<Todo> = await fetch(`${domain}/${resource}`)
    .then((res) => res.json())
    .catch(console.error);
  return todos;
};

export const deleteById = async (id: number) => {
  return fetch(`${domain}/${resource}/${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .catch(console.error);
};

export const create = async (todo: Todo) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  return fetch(`${domain}/${resource}`, options)
    .then((res) => res.json())
    .catch(console.error);
};

export const update = async (todo: Todo) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  return fetch(`${domain}/${resource}/${todo.id}`, options)
    .then((res) => res.json())
    .catch(console.error);
};
