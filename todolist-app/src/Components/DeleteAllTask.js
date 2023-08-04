const DeleteAllTask = (props) => {
  const { onDelete, dataDelete } = props;
  return (
    <div className="btn-delete-container">
        {!dataDelete ? '' : 
        <button className="delete-btn" onClick={onDelete}>
      <i id="trash-can" className="fa-solid fa-trash-can"></i>Delete All
      </button>}
      
    </div>

  );
};
export default DeleteAllTask;
