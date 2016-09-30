import { Component, OnInit } from '@angular/core';
import {MealOption} from "../meal-option";
import {MealOptionService} from "../meal-option.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  providers:[]

})
export class SpinnerComponent implements OnInit {
  constructor(mealOptionService:MealOptionService) {
    this.options = mealOptionService
      .getOptions();
  }
  iterations:number = 10;
  options:MealOption[];
  selected:number = null;
  pending:boolean = false;

  selectOption():void{
    this.pending = true;
    let i = 0;
    const r = ()=> {
      setTimeout(()=> {
        i++;
        this.selected = Math.floor(Math.random() * (this.options.length));
        if(i<this.iterations){
          r();
        }else{
          this.pending = false;
        }
      }, 250);
    };
    r();

  };

  ngOnInit() {
  }

}
