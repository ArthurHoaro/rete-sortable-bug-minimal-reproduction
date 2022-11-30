import { Control } from "rete";
import { AngularControl } from "rete-angular-render-plugin";
import { Type } from "@angular/core";
import { TextControlComponent } from "./control.component";

export class TextControl extends Control implements AngularControl {
  component: Type<TextControlComponent>;
  props: { [key: string]: unknown };

  constructor(public emitter, public override key, readonly = false, text = "") {
    super(key);

    this.component = TextControlComponent;
    this.props = {
      readonly,
      change: v => this.onChange(v),
      text: 0,
      mounted: () => {
        this.setValue((this.getData(key) as any) || key);
      }
    };
  }

  onChange(val: string) {
    this.setValue(val);
    this.emitter.trigger("process");
  }

  setValue(val: string) {
    this.props.text = val;
    this.putData(this.key, this.props.text);
  }
}
