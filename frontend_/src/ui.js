import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { nodeTypes } from "./nodes";

let nodeId = 6;
let edgeId = 1;

const getNodeId = () => `${nodeId++}`;
const getEdgeId = () => `e${edgeId++}`;

function FlowCanvas({ onGraphChange }) {
  const { project } = useReactFlow();

  const [nodes, setNodes] = useState([
    { id: "1", type: "input", position: { x: 80, y: 120 }, data: {} },
    { id: "2", type: "text", position: { x: 300, y: 120 }, data: {} },
  ]);

  const [edges, setEdges] = useState([
    { id: "e1", source: "1", target: "2" },
  ]);

  const [selectedNode, setSelectedNode] = useState(null);

  // Delete selected node with Backspace/Delete
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.key === "Backspace" || event.key === "Delete") &&
        selectedNode
      ) {
        setNodes((nds) => {
          const updatedNodes = nds.filter(
            (n) => n.id !== selectedNode.id
          );

          setEdges((eds) => {
            const updatedEdges = eds.filter(
              (e) =>
                e.source !== selectedNode.id &&
                e.target !== selectedNode.id
            );

            onGraphChange(updatedNodes, updatedEdges);
            return updatedEdges;
          });

          return updatedNodes;
        });

        setSelectedNode(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedNode, onGraphChange]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const data = JSON.parse(
        event.dataTransfer.getData("application/reactflow")
      );
      if (!data?.nodeType) return;

      const bounds = event.target.getBoundingClientRect();

      const position = project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });

      const newNodeId = getNodeId();

      const newNode = {
        id: newNodeId,
        type: data.nodeType,
        position,
        data: {},
      };

      setNodes((nds) => {
        const updatedNodes = [...nds, newNode];

        if (nds.length > 0) {
          const lastNode = nds[nds.length - 1];

          const newEdge = {
            id: getEdgeId(),
            source: lastNode.id,
            target: newNodeId,
          };

          setEdges((eds) => {
            const updatedEdges = [...eds, newEdge];
            onGraphChange(updatedNodes, updatedEdges);
            return updatedEdges;
          });
        } else {
          onGraphChange(updatedNodes, edges);
        }

        return updatedNodes;
      });
    },
    [project, edges, onGraphChange]
  );

  return (
    <div className="h-[520px] rounded-xl overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={(_, node) => setSelectedNode(node)}
        onPaneClick={() => setSelectedNode(null)}
        onNodesChange={(changes) =>
          setNodes((nds) => {
            onGraphChange(nds, edges);
            return nds;
          })
        }
        onEdgesChange={(changes) =>
          setEdges((eds) => {
            onGraphChange(nodes, eds);
            return eds;
          })
        }
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      />
    </div>
  );
}

/* ✅ THIS EXPORT FIXES YOUR ERROR */
export function PipelineUI({ onGraphChange }) {
  return (
    <ReactFlowProvider>
      <FlowCanvas onGraphChange={onGraphChange} />
    </ReactFlowProvider>
  );
}
