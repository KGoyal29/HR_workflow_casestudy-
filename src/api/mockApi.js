export const getAutomations = async () => {
  return [
    { id: "send_email", label: "Send Email", params: ["to", "subject"] },
    { id: "generate_doc", label: "Generate Document", params: ["template", "recipient"] }
  ];
};

export const simulateWorkflow = async (workflow) => {
  return {
    steps: workflow.nodes.map((n, i) => ({
      step: i + 1,
      message: `Executed ${n.type}`
    }))
  };
};