import { useState } from "react";

export const Create = ({ addTask }) => {
  const [input, setInput] = useState("");

  const addtaskHandler = (e) => {
    e.preventDefault(); // prevent page refresh

    if (input.trim() === "") return;

    addTask(input); // send task to parent
    setInput(""); // clear input
  };

  return (
    <form onSubmit={addtaskHandler}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;