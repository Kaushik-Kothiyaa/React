import { useState } from "react"

export const Create = ({ addTask }) => {

  const [data, setData] = useState("")

  const setDataHandler = (e) => {
    setData(e.target.value)
  }

  const addTaskHandler = (e) => {
    e.preventDefault()
    addTask(data)
    setData("")
  }




  return <>
    <form>
      <input
        type="text" name="todo" id="todo" value={data} onChange={setDataHandler} />
      <button type="submit" onClick={addTaskHandler}>Submit</button>
    </form>
  </>
}