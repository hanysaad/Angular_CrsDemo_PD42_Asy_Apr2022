import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserAuthGuard } from './Guards/user-auth.guard';

const routes: Routes = [
  // First-match wins strategy
  // Default path
  {path: '', component:MainLayoutComponent, children: [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'Products', component:ProductsComponent},
    {path:'Products/:pid', component:ProductDetailsComponent},
    {path:'NewProduct', component:AddProductComponent, canActivate:[UserAuthGuard]},
    {path:'EditProduct/:pID', component:AddProductComponent},
    {path:'Order', component:OrderMasterComponent},
  ]},
  {path: 'Register', component:UserRegisterComponent},
  {
    path: 'User',
    loadChildren: () => import('src/app/Components/user/user.module').then(m => m.UserModule)
  },
  //Wild-card path
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
