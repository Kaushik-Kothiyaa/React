
export const List = ({student, deleteStudent}) => {

    return <>

        <tr>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.city}</td>
            <td>
                <button className="btn btn-sm btn-primary me-2">
                    Edit
                </button>

                <button className="btn btn-sm btn-danger"  onClick={() => deleteStudent(student.name)}>
                    Delete
                </button>
            </td>
        </tr>
        
    </>
}