import { Input, Component } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
    template:`
        <div class="my-add">
        <h3>This is my add</h3>
        <h4>{{data.name}}</h4>
        <p>{{data.description}}</p>
        </div>

    `}
)
export class MyAddComponent implements AdComponent{
    @Input() data: any;
}