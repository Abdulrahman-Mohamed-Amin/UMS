import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WebsiteComponent } from './components/website/website.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateComponent } from './components/update/update.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './services/gaurdes/auth.guard';

const routes: Routes = [
  {path:"" , redirectTo:"login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"website", canActivate:[authGuard],component:WebsiteComponent , children:[
    {path:'',redirectTo:"users", pathMatch:'full'},
    {path:"users",component:UsersComponent},
    {path:"add-user",component:AddUserComponent},
    {path:"profile",component:ProfileComponent},
    {path:"update/:id" , component:UpdateComponent}
  ]},
  {path:"**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
