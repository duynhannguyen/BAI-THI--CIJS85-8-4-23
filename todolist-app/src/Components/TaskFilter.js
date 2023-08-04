import { FILTER_TASK_OPTION } from "../Constant/Constant";
const TaskFilter = (props) => {
  const { sortOption } = props;
  return (
    <div className="fillter-status">
      <button
        className="status-all"
        onClick={() => sortOption(FILTER_TASK_OPTION.ALL)}
      >
        All
      </button>

      <button
        className="status-uncomplete"
        onClick={() => sortOption(FILTER_TASK_OPTION.UNCOMPLETE)}
      >
        Active
      </button>

      <button
        className="status-complete"
        onClick={() => sortOption(FILTER_TASK_OPTION.COMPLETE)}
      >
        Completed
      </button>
    </div>
  );
};
export default TaskFilter;
