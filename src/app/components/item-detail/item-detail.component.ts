import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  animal?:Animal

  constructor(private listService: ListService, private route:ActivatedRoute) {//The class receive those parameter when the object is created
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal():void{
    const id=Number(this.route.snapshot.paramMap.get("id"))//Get the id from the URL
    this.listService.getItem(id).subscribe((animal)=>(this.animal=animal))//Get the informations of the specific Animal in database
  }

}
