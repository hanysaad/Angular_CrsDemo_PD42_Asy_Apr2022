import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsAPIService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newPrd: IProduct={} as IProduct;
  catList: ICategory[]=[];
  constructor( private prdAPIService: ProductsAPIService
            , private router: Router) {
    // this.newPrd={
    //   name:'Test Mobile From API',
    //   price:150,
    //   quantity:15,
    //   imgURL:'https://picsum.photos/id/237/150/100.jpg',
    //   catID: 2
    // }

    this.catList=[
      {id:1, name: 'Laptops'},
      {id:2, name: 'Tablets'},
      {id:3, name:'Mobiles'}
    ];
   }

  ngOnInit(): void {
  }

  saveProduct()
  {
    this.prdAPIService.addNewProduct(this.newPrd).subscribe(prd=>{
      this.router.navigate(['/Products']);
    });
  }

}
