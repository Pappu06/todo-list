import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete, onToggle }) {
  if (todos.length === 0) {
    return <p style={{ marginTop: "20px", color: "#888" }}>No tasks to show.</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
