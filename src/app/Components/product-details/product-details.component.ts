import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsAPIService } from 'src/app/Services/products-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private currPrdID:number=0;
  private prdIDsList: number[]=[];
  // private subscriptionList: Subscription[]=[];
  currPrd:IProduct|undefined=undefined;
  constructor(private activatedRoute:ActivatedRoute
            , private router: Router
            // , private prdService:ProductsService
            , private prdSericeAP: ProductsAPIService
            , private location: Location) { }


  ngOnInit(): void {
    // this.prdIDsList=this.prdService.getPrdIDsList();
    // this.currPrdID=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    // this.currPrd=this.prdService.getProductByID(this.currPrdID);
    // this.activatedRoute.paramMap.subscribe(paramMap=>{
    //   this.currPrdID=Number(paramMap.get("pid"));
    //   this.currPrd=this.prdService.getProductByID(this.currPrdID);
    // });

    // let sub=this.activatedRoute.paramMap.subscribe({
    //   next: (data)=>{},
    //   error: (error)=>{},
    //   complete: ()=>{}
    // });

    // this.subscriptionList.push(sub);
    // alert(this.prdID);

    this.currPrdID=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    this.prdSericeAP.getProductByID(this.currPrdID).subscribe(prd=>{
      this.currPrd=prd;
    });

  }

  ngOnDestroy(): void {
    // for (let subscription of this.subscriptionList)
    // {
    //   subscription.unsubscribe();
    // }
  }

  goBack()
  {
    this.location.back();
  }

  prevProduct()
  {
    let currIndex=this.prdIDsList.findIndex((val)=>val==this.currPrdID);
    if(currIndex!=0)
    {
      this.currPrdID=this.prdIDsList[currIndex-1];
      this.router.navigate(['/Products', this.currPrdID]);
    }
  }

  nextProduct()
  {
    let currIndex=this.prdIDsList.findIndex((val)=>val==this.currPrdID);
    if(currIndex<this.prdIDsList.length-1)
    {
      this.currPrdID=this.prdIDsList[currIndex+1];
      this.router.navigate(['/Products', this.currPrdID]);
    }

  }

  isFirstItem():boolean
  {
    return this.currPrdID==this.prdIDsList[0];
  }

  islastItem():boolean
  {
    return this.currPrdID==this.prdIDsList[this.prdIDsList.length-1];
  }

}
