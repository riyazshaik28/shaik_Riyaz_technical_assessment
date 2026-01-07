import { DraggableNode } from "./components/draggableNode";
import { useStore } from "./store";

export function PipelineToolbar({ onAdd }) {
  const clearGraph = useStore((s) => s.clearGraph);

  return (
    <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <span className="text-white font-semibold text-lg">Nodes</span>

      <DraggableNode type="input" label="Input" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="api" label="API" />
      <DraggableNode type="condition" label="Condition" />

      <div className="flex-1" />

      <button
        onClick={onAdd}
        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
      >
        + Add
      </button>

      <button
        onClick={clearGraph}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
      >
        Clear
      </button>
    </div>
  );
}
