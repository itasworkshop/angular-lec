import { Component } from '@angular/core';

const data = [{name: 'Anuj', age: 25}, 
              {name: 'Akshay', age: 28}, 
            {name: 'Sanjay', age: 35}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  mydata = data;
}
