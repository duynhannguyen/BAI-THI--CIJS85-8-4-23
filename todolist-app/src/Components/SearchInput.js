import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const SearchInput = (props) => {
  const [NewTaskTitle, setNewTask] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const NewTask = {
      TaskTitle: NewTaskTitle,
      isCompleted: false,
      id: uuidv4(),
    };
    props.onAddNewTask(NewTask);
    setNewTask("");
  };
  const onChangeHandler = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <form className="search-input" onSubmit={onSubmitHandler}>
      <input
        id="search-input"
        type="text"
        placeholder="New task"
        size="70"
        value={NewTaskTitle}
        onChange={onChangeHandler}
        required
      ></input>
      <button type="submit" className="btn-add">
        Add
      </button>
    </form>
  );
};
export default SearchInput;
