import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic.component';
import { DynamicHostDirective } from './dynamic-host.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DynamicComponent, DynamicHostDirective ],
  entryComponents: [ DynamicComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
