function Todos({ allTodos, handleDelete, handleEdit }) {
  // handleDelete item function in list containing button in react?
  //onclick of delete button, delete that item?

  return (
    <div className="todos">
      <ul>
        {allTodos.map((todo, index) => {
          return (
            <li key={index}>
              <div className="todo-item-div">
                <label htmlFor="task-check">
                  <input type="checkbox" id="task-check" />
                </label>
                <div className="todo-item">{todo.title}</div>
              </div>
              <div className="action-btns">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <button className="edit-btn" onClick={() => handleEdit(index)}>
                  Edit
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {allTodos.length === 0 && <span>No Todos</span>}
    </div>
  );
}

export default Todos;
