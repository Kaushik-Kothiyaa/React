import { useState } from "react"
import Create from "./components/Create"
import Display from "./components/Display"
import "bootstrap/dist/css/bootstrap.min.css"



export const App = () => {


      var [students, setStudents] = useState([])
      var [edit, setEdit] = useState({})
      const [tab, setTab] = useState("display")


      const addStudent = (data) => {

    var duplicate = students.find(ele => {
      if (ele.name == data.name) {
        return ele
      }
    })


    if (duplicate) {
      var newarray = students.filter(ele => {
        if (ele.name != duplicate.name) {
          return ele
        }
      })
      setStudents([...newarray, data])
        setEdit("")
      setTab("display")
    }
    else {
      setStudents([...students, data])
    }

  }

       



      const deleteStudent = (name) => {
        var newArray = students.filter((ele) => {
          return ele.name !== name
        })
        setStudents(newArray)
      }


    const editStudent = (name) => {
      setEdit(students.find((ele) => {
        return ele.name === name
      }))

        setTab("create")
    }



      return <>
        {tab == 'display' ? <Display students={students} deleteStudent={deleteStudent} editStudent={editStudent} setTab={setTab} /> : <Create addStudent={addStudent} edit={edit} setTab={setTab} />}
      </>
}

export default App