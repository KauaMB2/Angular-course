import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName:string = 'angular'
  userData={email:"teste@teste.com", senha: "senhaTeste"}
  title:string="TITLE"
}
