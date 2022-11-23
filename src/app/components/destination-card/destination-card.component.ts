import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss'],
})
export class DestinationCardComponent implements OnInit {

  @Input() location: string;
  @Input() charges: string;
  constructor() { }

  ngOnInit() {}

}
