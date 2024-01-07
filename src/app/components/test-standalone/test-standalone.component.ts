import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SonStandaloneComponent } from '../son-standalone/son-standalone.component';

@Component({
  selector: 'app-test-standalone',
  standalone: true,
  imports: [CommonModule, SonStandaloneComponent],
  templateUrl: './test-standalone.component.html',
  styleUrls: ['./test-standalone.component.css']
})
export class TestStandaloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
