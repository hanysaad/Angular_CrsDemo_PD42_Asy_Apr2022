import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private currPrdID:number=0;
  private prdIDsList: number[]=[];
  currPrd:IProduct|undefined=undefined;
  constructor(private activatedRoute:ActivatedRoute
            , private router: Router
            , private prdService:ProductsService
            , private location: Location) { }

  ngOnInit(): void {
    this.prdIDsList=this.prdService.getPrdIDsList();
    // this.currPrdID=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    // this.currPrd=this.prdService.getProductByID(this.currPrdID);
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.currPrdID=Number(paramMap.get("pid"));
      this.currPrd=this.prdService.getProductByID(this.currPrdID);
    });
    // alert(this.prdID);
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
