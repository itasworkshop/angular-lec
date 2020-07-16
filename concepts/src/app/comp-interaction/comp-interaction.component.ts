import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-interaction',
  templateUrl: './comp-interaction.component.html',
  styleUrls: ['./comp-interaction.component.css']
})
export class CompInteractionComponent implements OnInit {

  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  vote(agreed: boolean){
    this.voted.emit(agreed);
  }

}
