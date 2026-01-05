// DraggableNode.js
export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      className="
        flex flex-col items-center justify-center
        w-24 h-16
        rounded-lg
        bg-gradient-to-br from-indigo-600 to-purple-600
        text-white text-sm font-medium
        cursor-grab
        shadow-md
        hover:scale-105
        transition-transform
        active:cursor-grabbing
      "
    >
      {label}
    </div>
  );
};
