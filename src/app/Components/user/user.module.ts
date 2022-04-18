import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'', redirectTo:'/User/Profile', pathMatch:'full'},
  {path: 'Profile', component:UserProfileComponent},
  {path: 'EditProfile', component:EditProfileComponent}
]

@NgModule({
  declarations: [
    UserProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }


