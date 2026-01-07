import { useState } from "react";
import { AddNodeModal } from "./components/AddNodeModal";
import { useStore } from "./store";
import SubmitButton from "./submit";

import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";

function App() {
  const [open, setOpen] = useState(false);
  const addNode = useStore((s) => s.addNode);
  const getNodeID = useStore((s) => s.getNodeID);

  const handleAddNode = (type) => {
    addNode({
      id: getNodeID(type),
      type,
      position: { x: 100, y: 100 },
      data: {},
    });
  };

  return (
    <div className="p-4 space-y-4">
      <PipelineToolbar onAdd={() => setOpen(true)} />
      <PipelineUI />
      <SubmitButton />
      <AddNodeModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={handleAddNode}
      />
    </div>
  );
}

export default App;
