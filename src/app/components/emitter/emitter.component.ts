import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myNumber:number=0
  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber():void{//Function that is actived when the son component event is actived
    this.myNumber=Math.floor(Math.random()*100)
  }
}
