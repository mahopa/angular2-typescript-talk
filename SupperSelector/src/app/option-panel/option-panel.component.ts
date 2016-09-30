import {Component, OnInit} from '@angular/core';
import {OptionListComponent} from "../option-list/option-list.component";
import {OptionAddComponent} from "../option-add/option-add.component";
import {MealOption} from "../meal-option";
import {MealOptionService} from "../meal-option.service";

@Component({
  selector: 'app-option-panel',
  template: `<div class="well">
<app-option-add (addOption)="addOption($event)" ></app-option-add>
<app-option-list [options]="options" (deleteOption)="deleteOption($event)"></app-option-list>
</div>`,
  providers:[
    OptionListComponent,
    OptionAddComponent
  ]
})
export class OptionPanelComponent implements OnInit {
  options:MealOption[];
  addOption:(option:MealOption)=> void;
  deleteOption: (option:MealOption)=>void;

  constructor(mealOptionService: MealOptionService) {
      this.options = mealOptionService
        .getOptions();
      this.addOption = (option:MealOption)=> {
        mealOptionService.addOption(option);
      }
      this.deleteOption = (option:MealOption)=>{
        console.log('Delete Option Called');
        mealOptionService.deleteOption(option);
      }
    };

  ngOnInit(){};

}
