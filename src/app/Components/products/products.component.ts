import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsAPIService } from 'src/app/Services/products-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
  // ,providers:[ProductsService]
})
export class ProductsComponent implements OnInit, OnChanges {
  // private prdList: IProduct[];
  prdListOfCat:IProduct[]=[];
  @Input() receivedSelCatID:number=0;
  orderTotalPrice:number=0;
  @Output() onTotalPriceChanged: EventEmitter<number>;
  // todayDate: Date = new Date();
  constructor(
            // private prdService:ProductsService
            private prdAPIService: ProductsAPIService
            , private router:Router) {
    this.onTotalPriceChanged= new EventEmitter<number>();

   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.receivedSelCatID);
    this.prdAPIService.getProductsByCatID(this.receivedSelCatID).subscribe(prdList=>{
      this.prdListOfCat=prdList;
    });

    // this.prdListOfCat=this.prdService.getProductsByCateogryID(this.receivedSelCatID);
    // if (this.receivedSelCatID==0)
    // {
    //   this.prdListOfCat=this.prdList;
    // }
    // else
    //   this.prdListOfCat=this.prdList.filter(prd=> prd.catID==this.receivedSelCatID);
  }

  ngOnInit(): void {
    // this.prdListOfCat=this.prdService.getProductsByCateogryID(this.receivedSelCatID);
    this.prdAPIService.getAllProducts().subscribe(prdList=>{
      this.prdListOfCat=prdList;
    });
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

  openProductDetails(prdID:number)
  {
    this.router.navigate(['/Products',prdID]);
  }

}
