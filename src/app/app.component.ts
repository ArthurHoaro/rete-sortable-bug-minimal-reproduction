import { Component, ElementRef, ViewChild } from '@angular/core';
import { Engine, NodeEditor } from 'rete';
import { AngularRenderPlugin } from 'rete-angular-render-plugin';
import { MyNodeComponent } from './node.component';
import { TestComponent } from './rete/component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rete-sortablejs';

  @ViewChild("nodeEditor") element: ElementRef;
  editor = null;

  async ngAfterViewInit() {
    const container = this.element.nativeElement;

    const components = [new TestComponent()];

    const editor = new NodeEditor("demo@0.2.0", container);
    editor.use(AngularRenderPlugin, { component: MyNodeComponent });

    const engine = new Engine("demo@0.2.0");

    components.map(c => {
      editor.register(c);
      engine.register(c);
    });

    const n1 = await components[0].createNode();

    n1.position = [80, 200];

    editor.addNode(n1);
    editor.on('nodeselect', () => false);
    editor.on(
      [
        "process",
        "nodecreated",
        "noderemoved",
        "connectioncreated",
        "connectionremoved"
      ],
      (async () => {
        await engine.abort();
        await engine.process(editor.toJSON());
      }) as any
    );

    editor.view.resize();
    editor.trigger("process");
  }
}
