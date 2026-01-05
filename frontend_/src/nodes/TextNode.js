import { useEffect, useRef, useState } from "react";
import { BaseNode } from "./BaseNode";

const TextNode = () => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }

    // Detect {{ variables }}
    const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)];
    const vars = matches.map((match) => match[1]);

    setVariables(vars);
  }, [text]);

  return (
    <BaseNode
      title="Text"
      inputs={variables}
      outputs={["output"]}
    >
      <div className="flex flex-col gap-2">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type text with {{ variables }}"
          className="
            w-full
            min-h-[60px]
            resize-none
            rounded-md
            border border-gray-300
            bg-gray-50
            px-3 py-2
            text-sm
            text-gray-800
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:border-indigo-500
            transition
          "
        />

        <div className="text-xs text-gray-500">
        
        </div>
      </div>
    </BaseNode>
  );
};

export default TextNode;
