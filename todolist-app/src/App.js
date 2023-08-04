import { useState } from "react";
import "./App.css";
import SearchInput from "./Components/SearchInput";
import TodolList from "./Components/TodoList";
import DeleteAllTask from "./Components/DeleteAllTask";
import TaskFilter from "./Components/TaskFilter";
import { FILTER_TASK_OPTION } from "./Constant/Constant";
const App = () => {
  const GetTaskTitle = JSON.parse(localStorage.getItem("TaskTitle"));
  const [todoList, setTodoList] = useState(GetTaskTitle ?? []);
  const [filterOption, setFilterOption] = useState(FILTER_TASK_OPTION.ALL);
  const onAddNewTaskHandler = (NewTask) => {
    const SaveNewTask = [...todoList, NewTask];
    const StrSaveNewTask = JSON.stringify(SaveNewTask);
    localStorage.setItem("TaskTitle", StrSaveNewTask);
    setTodoList(SaveNewTask);
  };
  const DeleteEle = (id) => {
    const filterdTaskList = todoList.filter((task) => task.id !== id);
    setTodoList(filterdTaskList);
    const StrDeleteTaskList = JSON.stringify(filterdTaskList);
    localStorage.setItem("TaskTitle", StrDeleteTaskList);
  };
  const onChecked = (id) => {
    const updatingChecked = todoList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    const StrcheckTaskList = JSON.stringify(updatingChecked);
    localStorage.setItem("TaskTitle", StrcheckTaskList);
    setTodoList(updatingChecked);
  };
  const sortOption = (FILTER_TASK_OPTION) => {
    setFilterOption(FILTER_TASK_OPTION);
  };
  const sortTaskHandler = (filterOption, todoList) => {
    let sortList = [...todoList];
    switch (+ filterOption) {
      case FILTER_TASK_OPTION.COMPLETE:
        sortList = sortList.sort(
          (task) => (task.isCompleted = !task.isCompleted)
        );
        return sortList;
      case FILTER_TASK_OPTION.ALL:
        sortList = sortList.sort(
          (task) => (task.isCompleted = task.isCompleted)
        );
        return sortList;
      case FILTER_TASK_OPTION.UNCOMPLETE:
        sortList = sortList.sort(
          (task) => (task.isCompleted = task.isCompleted)
        );
        return sortList;
    }
  };
  const updatingFilter = sortTaskHandler(filterOption, todoList);
  const onDeleteAll = () => {
    const emptyStorage = [];
    setTodoList("");
    const StrEmptyStorage = JSON.stringify(emptyStorage);
    localStorage.setItem("TaskTitle", StrEmptyStorage);
  };
  return (
    <div className="App">
      <h1>#todo</h1>
      <div className="wrapper">
        <TaskFilter sortOption={sortOption} />
        <SearchInput onAddNewTask={onAddNewTaskHandler} />
        <TodolList data={todoList} DeleteId={DeleteEle} onChecked={onChecked} />
        <DeleteAllTask dataDelete={todoList} onDelete={onDeleteAll} />
      </div>
    </div>
  );
};

export default App;
