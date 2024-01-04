import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  showText:boolean=true
  constructor() { }

  ngOnInit(): void {
  }
  toggleMessage():void{
    this.showText=!this.showText//toggle
  }

}
