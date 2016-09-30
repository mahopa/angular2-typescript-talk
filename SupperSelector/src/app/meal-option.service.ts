import { Injectable } from '@angular/core';
import {MealOption} from "./meal-option";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import './app.rxjs-operators';

@Injectable()
export class MealOptionService {
  constructor(private http: Http) { }
  private serverUrl: string = 'http://localhost:3001/meals';
  options:MealOption[] = [];
  addOption(option:MealOption) {
    return this.http.post(this.serverUrl, option)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(
        data => this.options.push(data)
      );

  };
  deleteOption(option:MealOption){
    console.log('Delete Called');
    this.http.delete(this.serverUrl+`/${option.id}`)
    .catch(this.handleError)
    .subscribe(()=>{
      this.getOptions();
    });
  }
  getOptions(): MealOption[]{
    this.http.get(this.serverUrl)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(
        data => {this.options.splice(0, this.options.length);
          data.map((option)=>{this.options.push(option)})
        });
  return this.options;
  };
  private extractData(response: Response){
    let body = response.json();
    return body || [];
}
  private handleError(err){
    console.log(err);
    return Observable.throw('Error Reached')
  }

}
