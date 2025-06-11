export default function FilterButtons({ filter, setFilter }) {
  const filters = ["all", "pending", "completed"];

  return (
    <div style={{ marginTop: "20px" }}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{
            marginRight: "10px",
            padding: "10px 15px",
            backgroundColor: filter === f ? "#2c3e50" : "#ccc",
            color: filter === f ? "white" : "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
