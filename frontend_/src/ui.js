import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { nodeTypes } from "./nodes";
import { useStore } from "./store";

export function PipelineUI() {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);
  const onNodesChange = useStore((s) => s.onNodesChange);
  const onEdgesChange = useStore((s) => s.onEdgesChange);
  const onConnect = useStore((s) => s.onConnect);

  return (
    <div className="h-[500px] rounded-xl border border-gray-300 bg-slate-100 shadow-inner">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
}
