

export const List  = ({ele, deleteStudent, editStudent}) => {
       

    return <>
            
             <tr>
                <td>{ele.name}</td>
                <td>{ele.city}</td>
                <td>{ele.age}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => editStudent(ele.name)}>
                    Edit
                  </button>

                  <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(ele.name)}>
                    Delete
                  </button>
                </td>
            </tr>
</>
}

export default List