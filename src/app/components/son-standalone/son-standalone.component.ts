import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-son-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './son-standalone.component.html',
  styleUrls: ['./son-standalone.component.css']
})
export class SonStandaloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
