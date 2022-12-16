function Todos({
  allTodos,
  handleDelete,
  handleEdit,
  select,
  handleCheck,
  isChecked,
  setIsChecked,
}) {
  return (
    <div className="todos">
      <ul>
        {allTodos.map((todo, index) => {
          // const checked = todo.status === "complete" ? true : false;
          if (select === todo.status) {
            return (
              <li key={index}>
                <div className="todo-item-div">
                  <label htmlFor="task-check">
                    <input
                      type="checkbox"
                      id="task-check"
                      checked={todo.status === "complete" ? true : false}
                      onChange={(event) => handleCheck(event, index)}
                    />
                  </label>
                  <div className={`todo-item${isChecked ? " checked" : ""}`}>
                    {todo.title}
                  </div>
                </div>
                <div className="action-btns">
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            );
          } else if (select === "all") {
            return (
              <li key={index}>
                <div className="todo-item-div">
                  <label htmlFor="task-check">
                    <input
                      type="checkbox"
                      id="task-check"
                      checked={todo.status === "complete" ? true : false}
                      onChange={(event) => handleCheck(event, index)}
                    />
                  </label>
                  <div className={`todo-item${isChecked ? " checked" : ""}`}>
                    {todo.title}
                  </div>
                </div>
                <div className="action-btns">
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            );
          }
        })}
      </ul>
      {allTodos.length === 0 && <span>No Todos</span>}
    </div>
  );
}

export default Todos;
