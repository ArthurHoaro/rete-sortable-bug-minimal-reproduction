import { Component, Input } from "@angular/core";

@Component({
  template: `
    <div>{{ text }}</div>
  `,
  styles: [
    `
      div {
        width: 100%;
        height: 30px;
        background-color: red;
        color: white;
      }
    `
  ]
})
export class TextControlComponent {
  @Input() text: string;
  @Input() mounted: Function;
  ngOnInit() {
    this.mounted();
  }
}
