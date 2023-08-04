
const TodoItem = (props) => {
  const { id, TaskTitle, isCompleted, DeleteId, onChecked } = props || {}
  return (
    <div id={id} className="todoitem">
          <div>
          <input
            className="check-box"
            type="checkbox"
            checked={isCompleted}
            onChange={() => onChecked(id)}
          ></input>
       <span className={isCompleted === true ? "text" : ""}>{TaskTitle} </span>
       </div>
        <div className="trash-can-wrapper">
          <i
            id="trash-can"
            className="fa-solid fa-trash-can"
            onClick={() => DeleteId(id)}
          ></i>
        </div>

    </div>
  );
};
export default TodoItem;
