import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function useWorkflow() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const addNode = (type) => {
    const newNode = {
      id: uuid(),
      type,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: type }
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const onConnect = (params) => {
    setEdges((eds) => [...eds, params]);
  };

  return {
    nodes,
    edges,
    setNodes,
    setEdges,
    addNode,
    onConnect,
    selectedNode,
    setSelectedNode
  };
}