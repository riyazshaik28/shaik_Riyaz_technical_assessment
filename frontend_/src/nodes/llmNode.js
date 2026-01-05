import { BaseNode } from "./BaseNode";

const LLMNode = () => (
  <BaseNode title="LLM" inputs={["prompt"]} outputs={["response"]}>
    <div>Large Language Model</div>
  </BaseNode>
);

export default LLMNode;
