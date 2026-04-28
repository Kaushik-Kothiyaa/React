import { useState } from "react";
import Create from "./components/Create";
import Display from "./components/Display";

export const App = () => {
  const [task, setTask] = useState(["abc", "def", "XYZ"]);

  return (
    <>
      <h2>To Do App</h2>
      <Create />
      <Display task={task} />
    </>
  );
};

export default App;