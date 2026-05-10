import { useState } from "react";
import { Create } from "./components/Create";
import { Display } from "./components/Display";

export const App = () => {

  var [student, setStudent] = useState([]);

  const addStudent = (data) => {
    const duplicate = student.find(ele => {
      if (ele.name == data.name) {
        return ele
      }
    })


    if (duplicate) {
      var newArray = student.filter(ele => {
        return ele.name != duplicate.name
      })

      const update = [...newArray, data]
      setStudent(update)

    }

    else {
      const newArray = [...student, data]
      setStudent(newArray)
    }

  }



  const deleteStudent = (name) => {
    const newArray = student.filter(ele => ele.name !== name);
    setStudent(newArray);

  }

  return <>
    <div className="container mt-5">

      <Create addStudent={addStudent} />
      <Display student={student} deleteStudent={deleteStudent} />


    </div>
  </>
}

export default App;