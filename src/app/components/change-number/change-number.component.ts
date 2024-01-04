import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any>=new EventEmitter()//Create a event to send to the parent component

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.changeNumber.emit()//Emit the event to the parent element
  }

}
