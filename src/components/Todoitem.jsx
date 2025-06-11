export default function TodoItem({ item, onDelete, onToggle }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "12px 16px",
        borderRadius: "6px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        width: "500px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: item.completed ? "line-through" : "none",
      }}
    >
      <span
        onClick={() => onToggle(item.id)}
        style={{ cursor: "pointer", flex: 1 }}
      >
        {item.title}
      </span>
      <button
        onClick={() => onDelete(item.id)}
        style={{
          background: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}
