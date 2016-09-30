import {Component, OnInit, EventEmitter} from '@angular/core';
import {MealOption} from "../meal-option";
@Component({
  selector: 'app-option-list',
  template: `<div class="well-sm">
<div class="row" *ngFor="let option of options">
  <div class="col-md-12 well-sm">
    {{option.name}} <button (click)="deleteClicked(option)" class="btn btn-danger pull-right">X</button>
  </div>
</div>
</div>`,
  inputs: ['options'],
  outputs: ['deleteOption']
})
export class OptionListComponent implements OnInit {
  options:MealOption[];
  deleteOption:EventEmitter<{}> = new EventEmitter();
  deleteClicked(option:MealOption){
    console.log('deleteClicked');
    this.deleteOption.emit(option);
  }
  constructor() {
  }
  ngOnInit() {
  }
}
