import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // all, pending, completed

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
  });

  function addTodo(title) {
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Form addTodo={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
}
