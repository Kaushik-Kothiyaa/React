import React, { useEffect, useRef } from "react";

export const Create = ({ addStudent, edit, setTab, updateStudent }) => {

  const name = useRef();
  const city = useRef();
  const age = useRef();

  useEffect(() => {
    if (edit?.name) {
      name.current.value = edit.name;
      city.current.value = edit.city;
      age.current.value = edit.age;
    }
  }, [edit]);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: name.current.value,
      city: city.current.value,
      age: age.current.value,
    };

=
    if (edit?.name) {
      updateStudent({ ...data, id: edit.id });
    } else {
      addStudent(data);
    }

    name.current.value = "";
    city.current.value = "";
    age.current.value = "";
  };

  return <>
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3>{edit?.name ? "Update Student" : "Add Student"}</h3>
        </div>

        <div className="card-body">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" ref={name} />
            </div>

            <div className="mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" ref={city} />
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <input type="number" className="form-control" ref={age} />
            </div>

            <div className="d-flex gap-2">

              <button type="submit" className="btn btn-success flex-grow-1">
                {edit?.name ? "Update Student Details" : "Add Student Details"}
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setTab("display")}
              >
                View Students
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
 </>

export default Create;