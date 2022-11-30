import { Component, ChangeDetectorRef } from "@angular/core";
import { NodeComponent, NodeService } from 'rete-angular-render-plugin';

@Component({
  templateUrl: './node.component.html', // copy template from src/node
  styleUrls: ['./node.component.css'], // copy styles from src/node
  providers: [NodeService]
})
export class MyNodeComponent extends NodeComponent {
  /** Attribute used by SortableJS */
  sortableOptions = {
    forceFallback: false,
    direction: 'vertical',
    draggable: '.control',

    // Element is chosen
    onChoose: () => {
      console.log('onChoose');
    },

    // Element is unchosen
    onUnchoose: () => {
      console.log('onUnchoose');
    },

    // Element dragging started
    onStart: () => {
      console.log('onStart');
    },

    // Element dragging ended
    onEnd: () => {
      console.log('onEnd');
    },

    // Element is dropped into the list from another list
    onAdd: () => {
      console.log('onAdd');
    },

    // Changed sorting within list
    onUpdate: () => {
      console.log('onUpdate');
    },

    // Called by any change to the list (add / update / remove)
    onSort: () => {
      console.log('onSort');
    },

    // Element is removed from the list into another list
    onRemove: () => {
      console.log('onRemove');
    },

    // Attempt to drag a filtered element
    onFilter: () => {
      console.log('onFilter');
    },

    // Event when you move an item in the list or between lists
    onMove: () => {
      console.log('onMove');
    },

    // Called when creating a clone of element
    onClone: () => {
      console.log('onMove');
    },

    // Called when dragging element changes position
    onChange: () => {
      console.log('onChange');
    },
  };

  constructor(protected override service: NodeService, protected override cdr: ChangeDetectorRef) {
    super(service, cdr);
  }
}
