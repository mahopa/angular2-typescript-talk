import {Component, OnInit, EventEmitter} from '@angular/core';
import {MealOption} from "../meal-option";


@Component({
  selector: 'app-option-add',
  templateUrl: 'option-add.component.html',
  outputs:['addOption']
})
export class OptionAddComponent implements OnInit {
  btnType: string = 'btn-primary';
  option: MealOption = new MealOption('', '');
  addOption: EventEmitter<any> = new EventEmitter();
  addButtonClicked(): void {
    this.addOption.emit(this.option);
    this.option = new MealOption('', '');
  }
  constructor() { }

  ngOnInit() {}

}
