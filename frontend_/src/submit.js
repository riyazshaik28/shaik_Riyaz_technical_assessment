import { useStore } from "./store";

export default function SubmitButton() {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nodes, edges }),
        }
      );

      const data = await response.json();

      alert(
        `Pipeline Summary\n\n` +
          `Nodes: ${data.num_nodes}\n` +
          `Edges: ${data.num_edges}\n` +
          `Is DAG: ${data.is_dag}`
      );
    } catch (error) {
      alert("Backend not reachable");
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow"
    >
      Submit Pipeline
    </button>
  );
}
