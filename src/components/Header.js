function Header() {
  return (
    <div className="header">
      <button className="add-task">Add Task</button>
      <select className="select-task">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Commplete</option>
      </select>
    </div>
  )
}

export default Header;