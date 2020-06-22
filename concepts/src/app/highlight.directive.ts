import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor:string;
  @Input() defaultColor:string;

  //e1:ElementRef;

  constructor(private e1:ElementRef) { 
    //this.e1 = e1;
    //e1.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    //this.highlight('yellow');
    console.log(this.highlightColor);
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.highlight(null);
  }


  private highlight(color :string){
    this.e1.nativeElement.style.backgroundColor = color;
  }

}
