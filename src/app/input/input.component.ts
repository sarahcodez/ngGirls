import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <p>
      <label>{{ title }}</label>
      <input class="todo-input" [value]="title"
      (keyup.enter)="changeTitle($event.target.value)"
      #inputElement />
      <button (click)="changeTitle(inputElement.value)">Save</button>
    </p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() submitTitle: EventEmitter<string> = new EventEmitter();

  private title: string = '';

  constructor() {
  } // called before ngOnInit

  ngOnInit() {
  }

  changeTitle(newTitle: string): void { // void -> no return statement
    console.log('newTitle', newTitle);
    this.submitTitle.emit(newTitle);
  }

}
