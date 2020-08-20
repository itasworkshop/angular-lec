import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAddirective]'
})
export class AddirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
