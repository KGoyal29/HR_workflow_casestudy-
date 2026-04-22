const nodeTypes = [
  { type: "start", label: "Start Node" },
  { type: "task", label: "Task Node" },
  { type: "approval", label: "Approval Node" },
  { type: "automated", label: "Automated Node" },
  { type: "end", label: "End Node" }
];

export default function Sidebar({ onAddNode }) {
  return (
    <div style={{ width: "25%", padding: "10px", borderRight: "1px solid gray" }}>
      <h3>Nodes</h3>
      {nodeTypes.map(n => (
        <button key={n.type} onClick={() => onAddNode(n.type)}>
          {n.label}
        </button>
      ))}
    </div>
  );
}