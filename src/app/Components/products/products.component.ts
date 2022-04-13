import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {
  private prdList: IProduct[];
  prdListOfCat:IProduct[]=[];
  @Input() receivedSelCatID:number=0;
  orderTotalPrice:number=0;
  @Output() onTotalPriceChanged: EventEmitter<number>;
  // todayDate: Date = new Date();
  constructor() {
    this.onTotalPriceChanged= new EventEmitter<number>();
    this.prdList=[
      {id:1, name: 'Lenovo X230 laptop', price: 100, quantity:10, imgURL:'https://fakeimg.pl/150x100', catID:1},
      {id:5, name: 'MacBook Pro', price: 200, quantity:0, imgURL:'https://fakeimg.pl/150x100', catID:1},
      {id:10, name: 'Samsung Tab 3', price: 300, quantity:1, imgURL:'https://fakeimg.pl/150x100', catID:2},
      {id:12, name: 'IPad', price: 400, quantity:2, imgURL:'https://fakeimg.pl/150x100', catID:2},
      {id:15, name: 'Samsung S22 Ultra', price: 10500, quantity:10, imgURL:'https://fakeimg.pl/150x100', catID:3},
      {id:17, name: 'Iphone 13 pro', price: 345678, quantity:0, imgURL:'https://fakeimg.pl/150x100', catID:3}

    ];
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.receivedSelCatID);
    if (this.receivedSelCatID==0)
    {
      this.prdListOfCat=this.prdList;
    }
    else
      this.prdListOfCat=this.prdList.filter(prd=> prd.catID==this.receivedSelCatID);
  }

  ngOnInit(): void {
  }

  productsTrackBy(index: number, item: IProduct)
  {
    return item.id;
  }

  updateOrderTotalPrice(itemsCount:number, price:number)
  {
    this.orderTotalPrice+= (itemsCount*price);
    //Emit Event
    this.onTotalPriceChanged.emit(this.orderTotalPrice);
  }

}
