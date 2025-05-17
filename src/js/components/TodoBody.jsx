import React, { useEffect } from "react";
import { fetchData } from "./fetch";

const TodoBody = ({ todos, setTodos }) => {
  useEffect(() => {
    createUser();
    handleFetch();
  }, []);
  async function handleFetch() {
    const data = await fetchData();
    console.log("here are my todos", data);
    setTodos(data);
  }
  async function createUser() {
    const response = await fetch(
      `https://playground.4geeks.com/todo/users/Monalisa`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    return data;
  }

  const renderTodos = todos.map((todoItem) => {
    return (
      <li className="todo-item" key={todoItem.id}>
        <h4>
          {todoItem.label}
          <span>
            <button
              className="delete-task"
              onClick={() => deleteTodo(todoItem.id)}
            >
              X
            </button>
          </span>
        </h4>
      </li>
    );
  });
  const deleteTodo = async (id) => {
    const response = await fetch(
      `https://playground.4geeks.com/todo/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("Task Deleted ");
      handleFetch();
    } else {
      console.log("Please try again");
    }
    return;
  };
  return (
    <>
      <section className="main d-flex justify-content-center">
        <ul className="todo-list">
          {todos.length !== 0 ? renderTodos : "No tasks. Add a task."}
        </ul>
      </section>
    </>
  );
};
export default TodoBody;
