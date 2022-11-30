import { Component, Input, Output } from "rete";
import { TextControl } from "../control/control";

export class TestComponent extends Component {
  constructor() {
    super("Test");
  }

  async builder(node) {
    node.addControl(new TextControl(this.editor, "text1", true));
    node.addControl(new TextControl(this.editor, "text2", true));
    node.addControl(new TextControl(this.editor, "text3", true));
  }

  worker() {
  }
}
