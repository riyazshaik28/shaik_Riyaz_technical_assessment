export function SubmitButton({ graph }) {
  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graph),
    });

    const data = await response.json();

    alert(
      `Pipeline Info:\n\n` +
      `Nodes: ${data.num_nodes}\n` +
      `Edges: ${data.num_edges}\n` +
      `Is DAG: ${data.is_dag}`
    );
  };

  return (
    <button
      onClick={handleSubmit}
      className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
    >
      Submit
    </button>
  );
}
