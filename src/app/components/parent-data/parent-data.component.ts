import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name:string=''//Create the variable to receive the data shared
  @Input() obj!:{email:string, senha:string}//Create the variable to receive the data shared
  onstructor() { }

  ngOnInit(): void {
  }

}
