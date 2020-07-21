import { Component, OnInit, Input, Output,EventEmitter, Directive, ViewChild } from '@angular/core';

@Directive({selector: 'pane'})
export class Pane{
  @Input() id: string;
}

@Component({
  selector: 'app-comp-interaction',
  templateUrl: './comp-interaction.component.html',
  styleUrls: ['./comp-interaction.component.css']
})
export class CompInteractionComponent implements OnInit {
 ngOnInit(): void {
   
 }

 @ViewChild(Pane) 

 set pane(v: Pane){
   setTimeout(() =>{
     this.selectedPane = v.id;
   },0);
 }

 selectedPane: string = "";
 shouldShow = true; 

 toggle(){
   this.shouldShow = !this.shouldShow;
 }

}
