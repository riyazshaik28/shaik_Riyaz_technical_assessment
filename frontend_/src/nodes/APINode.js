import { BaseNode } from "./BaseNode";

const APINode = () => (
  <BaseNode title="API" inputs={["request"]} outputs={["response"]}>
    <div>API Call</div>
  </BaseNode>
);

export default APINode;
