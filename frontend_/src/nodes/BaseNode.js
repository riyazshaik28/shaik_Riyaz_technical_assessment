import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";

/**
 * BaseNode
 * Reusable abstraction for all node types
 */
export function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl w-56 shadow-md hover: text-black">
      {/* Header */}
      <div className="px-3 py-2 text-sm font-semibold text-gray-800 bg-gray-100 border-b border-gray-300 rounded-t-xl">
        {title}
      </div>

      {/* Input Handles */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: 56 + index * 20 }}
        />
      ))}

      {/* Content */}
      <div className="p-3 text-sm text-gray-700 space-y-2">
        {children}
      </div>

      {/* Output Handles */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: 56 + index * 20 }}
        />
      ))}
    </div>
  );
}
