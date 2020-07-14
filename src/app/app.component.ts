import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponent } from './dynamic.component';
import { DynamicHostDirective } from './dynamic-host.directive';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild (DynamicHostDirective) public dinamycHost: DynamicHostDirective;

  constructor(private componentFactoryResolver:ComponentFactoryResolver){
  }

  public createComponent(): void {
    const component = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    this.dinamycHost.viewContainerRef.clear();
    this.dinamycHost.viewContainerRef.createComponent(component);
  }
}
