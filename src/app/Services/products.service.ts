import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private prdList: IProduct[];
  constructor() {
    this.prdList = [
      { id: 1, name: 'Lenovo X230 laptop', price: 100, quantity: 10, imgURL: 'https://fakeimg.pl/150x100', catID: 1 },
      { id: 5, name: 'MacBook Pro', price: 200, quantity: 0, imgURL: 'https://fakeimg.pl/150x100', catID: 1 },
      { id: 10, name: 'Samsung Tab 3', price: 300, quantity: 1, imgURL: 'https://fakeimg.pl/150x100', catID: 2 },
      { id: 12, name: 'IPad', price: 400, quantity: 2, imgURL: 'https://fakeimg.pl/150x100', catID: 2 },
      { id: 15, name: 'Samsung S22 Ultra', price: 10500, quantity: 10, imgURL: 'https://fakeimg.pl/150x100', catID: 3 },
      { id: 17, name: 'Iphone 13 pro', price: 345678, quantity: 0, imgURL: 'https://fakeimg.pl/150x100', catID: 3 }
    ];
  }

  getAllProducts(): IProduct[] {
    return this.prdList;
  }

  getProductsByCateogryID(catID: number): IProduct[] {
    if (catID == 0) {
      return this.prdList;
    }
    else
      return this.prdList.filter(prd => prd.catID == catID);
  }

  getProductByID(prdID: number): IProduct|undefined
  {
    return this.prdList.find(prd=>prd.id==prdID);
  }

  addNewProduct(prd:IProduct):void
  {
    this.prdList.push(prd);
  }

  // getPrdIDsList(): number[]
  // {
  //   // return this.prdList.map(prd=>prd.id);
  // }

}
