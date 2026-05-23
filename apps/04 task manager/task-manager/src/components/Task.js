function Task({ title, completed, onComplete, onDelete }) {
  return (
    <div
      className="task"
      style={{ backgroundColor: completed ? "lightgreen" : "white" }}
    >
      <div className="title">
        <h3 style={{ textDecoration: completed ? "line-through" : "none" }}>
          {title}
        </h3>
        <div className="buttons">
          <button className="btnComplete" onClick={onComplete}>
            {completed ? "Undo" : "Complete"}
          </button>
          <button className="btnDelete" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
