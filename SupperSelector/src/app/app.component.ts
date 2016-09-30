import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="well-lg">
<div class="row titleBar">
<h1>{{title}}</h1>
</div>
<div class="row">
  <div class="col-md-3"><app-option-panel></app-option-panel></div>
  <div class="col-md-9"><app-spinner></app-spinner></div>
</div>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Supper Selector!';
  constructor(){
  }
}
