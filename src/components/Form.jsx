import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ addTodo }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setInput("");
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your task"
        />
        <button className={styles.modernButton} type="submit">Add</button>
      </div>
    </form>
  );
}
