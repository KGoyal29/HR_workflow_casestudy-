const TaskNode = ({ data }) => {
  return (
    <div style={{ padding: 10, border: '1px solid black' }}>
      <strong>Task</strong>
      <div>{data.label}</div>
    </div>
  );
};

export default TaskNode;