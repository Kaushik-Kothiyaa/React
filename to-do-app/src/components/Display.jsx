export const Display = ({ task }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {task.map((element, index) => (
          <tr key={index}>
            <td>{element}</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Display;