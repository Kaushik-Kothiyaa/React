import { useState } from "react"
import { Create } from "./components/Create"
import { Display } from "./components/Display"

const App = () => {
  const [task, setTask] = useState([])

  const addTask = (taskText) => {
    if (!taskText) return
    setTask((prev) => [...prev, taskText])
  }

  const removetask = (data) => {
    const newarray = task.filter(ele => ele !== data)
    setTask(newarray)
  }

  return <>
    <h2>To Do App</h2>
    <Create addTask={addTask} />
    <Display tasks={task} removetask={removetask} />
  </>
}
export default App