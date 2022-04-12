import { Component, OnInit } from '@angular/core';
import { IStore } from 'src/app/Models/istore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storeInfo: IStore;
  isImgShown:boolean=true;
  custFeedback:string="Test";
  constructor() {
    this.storeInfo={
      name: "ITI Store",
      imgURL: 'https://fakeimg.pl/250x100/',
      branches: ["Cairo", "Alex", "Asyut", "Sohag", "Qena"]
    };
   }

  ngOnInit(): void {
  }

  toggleImg()
  {
    this.isImgShown= !this.isImgShown;
  }

}
