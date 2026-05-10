
import { useState, useRef } from "react";


export const Create = ({addStudent}) => {


    const name = useRef()
    const email = useRef()
    const city = useRef()

  const submitHandler = (e) =>{
    e.preventDefault()
    var data = {
      "name" : name.current.value,
      "email" : email.current.value,
      "city" : city.current.value
    }

    addStudent(data)
    name.current.value = ""
    email.current.value = ""
    city.current.value = ""
  }


  return <>
    <div className="card p-4 shadow mb-4">
    <h2 className="text-center mb-4">Student CRUD Application</h2>

    <form onSubmit={submitHandler}>
       <div className="mb-3">
        <label htmlFor="name" className="form-label"> Enter Name </label>
        <input type="text" id="name" className="form-control" placeholder="Enter name" ref={name}/>
      </div>

       <div className="mb-3">
        <label htmlFor="email" className="form-label"> Enter Email </label>
        <input type="email" id="email" className="form-control" placeholder="Enter email" ref={email}/>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="form-label"> Enter City </label>
        <input type="text" id="city" className="form-control" placeholder="Enter city" ref={city}/>
      </div>

      <button className="btn btn-primary w-100">Submit</button>
    </form>
  </div>
  </>

}

