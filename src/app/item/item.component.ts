import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <div class="todo-item">
    <div class="todo-title">
      {{ todoItem.title }}
    </div>
    <button class="btn btn-red" (click)="removeItem()">x</button>
   </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todoItem: any;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    console.log('this', this);
    this.remove.emit(this.todoItem);
  }
}
