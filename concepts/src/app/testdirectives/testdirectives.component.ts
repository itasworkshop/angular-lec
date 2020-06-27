import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testdirectives',
  templateUrl: './testdirectives.component.html',
  styleUrls: ['./testdirectives.component.css']
})
export class TestdirectivesComponent implements OnInit {

  title = 'concepts';

  name = 'Rajesh';

  color = 'green';

  constructor() { }

  ngOnInit(): void {
  }

}
