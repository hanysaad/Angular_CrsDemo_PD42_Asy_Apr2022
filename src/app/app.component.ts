import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template:'<h1>Hello Angular</h1> <div>{{projectTitle}}</div>',
  // styles:["h1{color:red}"],
})
export class AppComponent {
  projectTitle:string= "Angular Course Demo";
}
