import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import NodePanel from "./components/NodePanel";
import SimulationPanel from "./components/SimulationPanel";
import useWorkflow from "./hooks/useWorkflow";

export default function App() {
  const {
    nodes,
    edges,
    setNodes,
    setEdges,
    addNode,
    onConnect,
    selectedNode,
    setSelectedNode
  } = useWorkflow();

  const updateNode = (id, data) => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === id ? { ...n, data: { ...n.data, ...data } } : n
      )
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onAddNode={addNode} />

      <Canvas
        nodes={nodes}
        edges={edges}
        onNodesChange={setNodes}
        onEdgesChange={setEdges}
        onConnect={onConnect}
        onNodeClick={(e, node) => setSelectedNode(node)}
      />

      <div style={{ width: "20%" }}>
        <NodePanel node={selectedNode} updateNode={updateNode} />
        <SimulationPanel nodes={nodes} />
      </div>
    </div>
  );
}