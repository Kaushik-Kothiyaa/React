

export const List = ({ele, deleteStudent, EditHandler}) => {

    return <>
        <tr >
            <td>{ele.name}</td>
            <td>{ele.age}</td>
            <td>{ele.city}</td>
          <td>
            <button className="btn btn-primary btn-sm me-2" onClick={() => EditHandler(ele.name)}>Edit</button>
             
            <button className="btn btn-danger btn-sm" onClick={()=>deleteStudent(ele.name)}>Delete</button>
        </td>
        </tr>
    </>
}