import { Input, Component } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
    template:`
        <div class="your-add">
        <h3>This is your add</h3>
        <h4>{{data.name}}</h4>
        <p>{{data.description}}</p>
        </div>

    `}
)
export class YourAddComponent implements AdComponent{
    @Input() data: any;
}