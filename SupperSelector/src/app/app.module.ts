import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { OptionListComponent } from './option-list/option-list.component';
import { OptionPanelComponent } from './option-panel/option-panel.component';
import { OptionAddComponent } from './option-add/option-add.component';
import {MealOptionService} from "./meal-option.service";

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    OptionListComponent,
    OptionPanelComponent,
    OptionAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MealOptionService],
  bootstrap: [AppComponent]
})
 export class AppModule { }

