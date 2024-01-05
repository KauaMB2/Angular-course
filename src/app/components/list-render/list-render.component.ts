import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal'

import { ListService } from 'src/app/list.service';//Import the service

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[]=[
    { name: 'Turca', type: 'Dog', age:5 },
    { name: 'Tom', type: 'Cat', age:6 },
    { name: 'Frida', type: 'Dog', age:7 },
    { name: 'Bob', type: 'Horse', age:8 }
  ]
  animalDetails:string=""
  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails=`O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal){
    this.animals=this.listService.remove(this.animals, animal)//Call the service
  }
}
