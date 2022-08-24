export default function TodoList(props) {
  const todos = props.todos
    .sort((a, b) => {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    })
    .reverse();

  return (
    <div className="todo">
      <h2>Todo List</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Start Date</th>
              <th>Priority</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.startDate}</td>
                  <td>{item.priority}</td>
                  <td>
                    <button onClick={(e) => props.handleRemove(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
