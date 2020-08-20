import { Component } from '@angular/core';
import { AdItem } from './dynamic-comp/ad-item';
import { AdService } from './dynamic-comp/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ads: AdItem[];

  constructor(private adService:AdService){}

  ngOnInit(){
    this.ads = this.adService.getAds();
  }

  /* agreed = 0;
  disagreed = 0;
  users = ['Raj','Rajesh','Tom'];

  onVoted(agreed:boolean){
    agreed ? this.agreed++ : this.disagreed++;
  } */

  //title = 'concepts';

  //name:string = "Rajesh";

  //name = 'Rajesh';

  //color = 'green';


}
