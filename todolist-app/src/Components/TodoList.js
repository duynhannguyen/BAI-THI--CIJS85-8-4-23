import TodoItem from "./TodoItem";
const TodolList = (props) => {
  const { data = [], DeleteId, onChecked } = props;
  let TaskList =
    data &&
    data.map((todo) => (
      <TodoItem
        {...todo}
        DeleteId={DeleteId}
        onChecked={onChecked}
      />
    ));

  return <div className="todolist">{TaskList}</div>;
};
export default TodolList;
