export default function NodePanel({ node, updateNode }) {
  if (!node) return <div>Select a node</div>;

  return (
    <div style={{ padding: "10px" }}>
      <h3>Edit Node</h3>

      <input
        placeholder="Title"
        value={node.data.label || ""}
        onChange={(e) =>
          updateNode(node.id, { label: e.target.value })
        }
      />
    </div>
  );
}