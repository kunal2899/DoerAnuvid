import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path : '',  pathMatch:'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path:'dashboard', component: DashComponent, children:[
    {path : 'home', component: HomeComponent},
    {path: 'update-profile', component: UpdateComponent},
    {path: 'find-services', component: FindComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
