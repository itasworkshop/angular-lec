import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { MyAddComponent } from './myadd.component';
import { YourAddComponent } from './youradd.component';

@Injectable()
export class AdService{

    getAds(){
        return [
            new AdItem(MyAddComponent,
                {name:"Rajesh",description:"my description"}),
            new AdItem(MyAddComponent,
                {name:"Rajeev",description:"my  second description"}),
            new AdItem(YourAddComponent,
                {name:"Tom",description:"your add description"}),
        ];
    }

}