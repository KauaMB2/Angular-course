import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!:string
  momentForm!: FormGroup

  ngOnInit():void{
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    })
  }

  get title(){//Get the title of the inserted in the form
    return this.momentForm.get('title')!
  }

  get description(){//Get the description inserted in the form
    return this.momentForm.get('description')!
  }

  submit():void{
    console.log("Enviou!")
  }
}
