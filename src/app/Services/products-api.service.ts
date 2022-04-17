import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , Authorization': 'Token'
      })
    }
  }

  getAllProducts(): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/products`)
        // .pipe(
        //   retry(3),
        //   catchError((err)=>{})
        // );
  }

  getProductsByCatID(catID: number): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/products?catID=${catID}`);
  }

  getProductByID(prdID: number): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.APIBaseURL}/products/${prdID}`);
  }

  addNewProduct(newPrd: IProduct): Observable<IProduct>
  {
    return this.httpClient.post<IProduct>(`${environment.APIBaseURL}/products`, JSON.stringify(newPrd),this.httpOptions);
  }

  updateProduct(prdID: number, newPrd: IProduct)
  {

  }

  deleteProduct(prdID:number)
  {

  }
}
