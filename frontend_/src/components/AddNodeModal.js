
const NODE_TYPES = [
  { type: "input", label: "Input Node" },
  { type: "text", label: "Text Node" },
  { type: "llm", label: "LLM Node" },
  { type: "api", label: "API Node" },
  { type: "condition", label: "Condition Node" },
];

export function AddNodeModal({ open, onClose, onAdd }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-xl w-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4">
          Add New Node
        </h2>

        <div className="space-y-3">
          {NODE_TYPES.map((node) => (
            <button
              key={node.type}
              onClick={() => {
                onAdd(node.type);
                onClose();
              }}
              className="w-full px-4 py-2 rounded-lg border hover:bg-indigo-50"
            >
              {node.label}
            </button>
          ))}
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
