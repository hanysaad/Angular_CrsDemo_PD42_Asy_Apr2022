import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ICategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  catList: ICategory[];
  selectedCatID:number=0;
  receivedOrderTotalPrice:number=0;

  // @ViewChild('clientName') clientNameInp: ElementRef|null=null;
  // @ViewChild('clientName') clientNameInp: ElementRef|undefined=undefined;
  // @ViewChild('clientName') clientNameInp?: ElementRef;
  // @ViewChild('clientName') clientNameInp: ElementRef= {} as ElementRef;
  // Non-null assertion operator
  @ViewChild('clientName') clientNameInp!: ElementRef;
  @ViewChild(ProductsComponent) ProductsCompObj!: ProductsComponent;

  constructor() {
    this.catList=[
      {id:1, name: 'Laptops'},
      {id:2, name: 'Tablets'},
      {id:3, name:'Mobiles'}
    ];
    //this.clientNameInp.nativeElement
   }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.clientNameInp.nativeElement.style.backgroundColor="Lightyellow";
    this.clientNameInp.nativeElement.value="Test";

    console.log(this.ProductsCompObj.prdListOfCat);
  }

  updateTotalPrice(totalPrice: number)
  {
    this.receivedOrderTotalPrice=totalPrice;
  }

}
