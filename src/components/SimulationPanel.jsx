import { simulateWorkflow } from "../api/mockApi";

export default function SimulationPanel({ nodes }) {
  const runSimulation = async () => {
    const result = await simulateWorkflow({ nodes });
    alert(JSON.stringify(result.steps, null, 2));
  };

  return <button onClick={runSimulation}>Run Simulation</button>;
}