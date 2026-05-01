export const Display = ({ tasks, removetask }) => {
  return <>
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks?.map(ele => <tr key={ele}>
          <td>{ele}</td>
          <td><button onClick={() => removetask(ele)}>Delete</button></td>
        </tr>)}
      </tbody>
    </table>
  </>
}