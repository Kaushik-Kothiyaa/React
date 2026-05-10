import { List } from "./List"


export const Display = ({ student, deleteStudent }) => { 

    return<>
        <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
              {student.map(ele=> 
              <List key={ele.id} student={ele} deleteStudent={deleteStudent}/>)
              }
          </tbody>
        </table>
      </div>
    </>
}

