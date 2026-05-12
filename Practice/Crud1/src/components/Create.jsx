
import { useRef, useEffect } from 'react';

export const Create = ({ addStudent, editStudent, updateStudent, setEditStudent }) => {
    

    const name = useRef()
    const age = useRef()
    const city = useRef()

    useEffect(() => {
        if(editStudent) {
            name.current.value = editStudent.name
            age.current.value = editStudent.age
            city.current.value = editStudent.city
        } else {
            name.current.value = ""
            age.current.value = ""
            city.current.value = ""
        }
    }, [editStudent])

    const submitHandler = (e) => {
        e.preventDefault()        

        var data = {
                "name" : name.current.value,
                "age" : age.current.value,
                "city" : city.current.value

        }

        if(editStudent) {
            updateStudent(editStudent.name, data)
        } else {
            addStudent(data)
        }
    }

    const cancelEdit = () => {
        setEditStudent(null)
        name.current.value = ""
        age.current.value = ""
        city.current.value = ""
    }

  


    return <>
    <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              </div>

            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter name"
                    required
                    ref={name}/>
                </div>

                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="Enter age"
                    required
                    ref={age}
                  />
                </div>

              
                <div className="mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"              
                    className="form-control"
                    placeholder="Enter city"
                    required
                    ref={city}
                  />
                </div>

              
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-success flex-grow-1">
                    {editStudent ? 'Update Student' : 'Register Student'}
                  </button>
                  {editStudent && <button type="button" onClick={cancelEdit} className="btn btn-secondary">
                    Cancel
                  </button>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
}