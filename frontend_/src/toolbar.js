import { DraggableNode } from "./components/draggableNode";

export function PipelineToolbar() {
  return (
    <div
      className="
        flex items-center gap-4
        px-6 py-4
        rounded-xl
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
        shadow-lg
      "
    >
      <span className="text-white font-semibold text-lg mr-4">
        Nodes
      </span>

      <DraggableNode type="input" label="Input" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="api" label="API" />
      <DraggableNode type="condition" label="Condition" />
    </div>
  );
}
