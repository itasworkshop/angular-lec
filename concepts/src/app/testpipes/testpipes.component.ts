import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpipes',
  templateUrl: './testpipes.component.html',
  styleUrls: ['./testpipes.component.css']
})
export class TestpipesComponent implements OnInit {

  name:string = "rajesh";
  joindate:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
