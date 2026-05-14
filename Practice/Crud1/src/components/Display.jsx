import List from "./List"


export const Display = ({students, deleteStudent, editStudent, setTab}) => {
  return <>
        <div className="container mt-5">
      <div className="card shadow">
         <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-success">Student Records</h4>

                <button type="reset" className="btn btn-secondary" onClick={() => setTab("create")}>
                    Add Student
                </button>
            </div>

         <div className="card-body">
          {students.length === 0 ? (
            <h5 className="text-center text-muted my-4">No data found</h5>
          ) : (
            <table className="table table-bordered table-hover">
              <thead className="table-primary">
                <tr>
                  <th>Name</th>
                  <th>City</th>
                  <th>Age</th>
                  <th width="200">Action</th>
                </tr>
              </thead>

              <tbody>
                
                  {students.map((ele, index) => <List key={index} ele={ele} deleteStudent={deleteStudent} editStudent={editStudent}/>) }          
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>

    </>

}

export default Display