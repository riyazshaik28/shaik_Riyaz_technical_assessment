import { BaseNode } from "./BaseNode";

const ConditionNode = () => (
  <BaseNode title="Condition" inputs={["value"]} outputs={["true", "false"]}>
    <div>Conditional Branch</div>
  </BaseNode>
);

export default ConditionNode;
