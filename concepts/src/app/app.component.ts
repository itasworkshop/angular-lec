import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  agreed = 0;
  disagreed = 0;
  users = ['Raj','Rajesh','Tom'];

  onVoted(agreed:boolean){
    agreed ? this.agreed++ : this.disagreed++;
  }

  //title = 'concepts';

  //name:string = "Rajesh";

  //name = 'Rajesh';

  //color = 'green';


}
