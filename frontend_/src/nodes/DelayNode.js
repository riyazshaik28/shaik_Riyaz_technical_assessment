import { BaseNode } from "./BaseNode";

const DelayNode = () => (
  <BaseNode title="Delay" inputs={["input"]} outputs={["output"]}>
    <div>Delay Execution</div>
  </BaseNode>
);

export default DelayNode;
