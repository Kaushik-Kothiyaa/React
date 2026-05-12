import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Create } from './components/Create';
import { Display } from './components/Display';



export const App = () => {

  var [student, setStudent] = useState([]);
  var [editStudent, setEditStudent] = useState(null)
  
  const addStudent = (data) =>{
    setStudent([...student, data])
    setEditStudent(null)
    }

    const updateStudent = (oldName, newData) => {
      const updatedArray = student.map(ele => {
        if(ele.name === oldName) {
          return newData
        }
        return ele
      })
      setStudent(updatedArray)
      setEditStudent(null)
    }

     const deleteStudent = (name) =>{
        const newArray = student.filter(ele=>{
          return ele.name !== name
        
        })
        setStudent(newArray)

    }

    const EditHandler = (name) => {
      const data = student.find(ele=>{
        return ele.name == name
      })

      setEditStudent(data)

    }

   

  return <>
    <div className="container mt-5">

      <Create addStudent={addStudent} editStudent={editStudent} updateStudent={updateStudent} setEditStudent={setEditStudent} />
      <Display student={student} deleteStudent={deleteStudent} EditHandler={EditHandler} />

    </div>

  </>
}

export default App