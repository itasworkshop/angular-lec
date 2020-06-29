import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-test-life-cycle-hooks',
  templateUrl: './test-life-cycle-hooks.component.html',
  styleUrls: ['./test-life-cycle-hooks.component.css']
})
export class TestLifeCycleHooksComponent implements OnInit ,OnChanges{

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
    console.log("Hello from onInit."+this.name);
  }

  ngOnChanges():void{
    console.log("Hello from onChanges."+this.name);
  }

}
