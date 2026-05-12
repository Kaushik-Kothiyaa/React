import { List } from "./List";

export const Display = ({ student, deleteStudent, EditHandler }) => {

  return <>
    <div className="row mt-5">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-header bg-dark text-white">
            <h4 className="mb-0">Student List</h4>
          </div>

          <div className="card-body">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-primary">
                <tr>

                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {student.length > 0 ? (
                  student.map(ele => (
                    <List
                      key={ele.name}
                      ele={ele}
                      deleteStudent={deleteStudent}
                      EditHandler={EditHandler}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-dark fw-bold">
                      Data Not Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
}