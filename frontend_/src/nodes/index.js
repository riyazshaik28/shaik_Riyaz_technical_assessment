import APINode from "./APINode";
import ConditionNode from "./ConditionNode";
import DelayNode from "./DelayNode";
import InputNode from "./InputNode";
import OutputNode from "./OutputNode";
import TextNode from "./TextNode";
import LLMNode from "./llmNode";

export const nodeTypes = {
  input: InputNode,
  output: OutputNode,
  text: TextNode,
  llm: LLMNode,
  api: APINode,
  delay: DelayNode,
  condition: ConditionNode,
};
