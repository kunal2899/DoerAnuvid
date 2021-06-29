import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { DeAuthGuard } from './services/de-auth.guard';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path : '',  pathMatch:'full', redirectTo: '/login'},
  {path: 'login', component: LoginComponent},
  {path:'dashboard', component: DashComponent, children:[
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path : 'home', component: HomeComponent,pathMatch:'full'},
    {path: 'update-profile', component: UpdateComponent,pathMatch:'full'},
    {path: 'find-services', component: FindComponent,pathMatch:'full'},
  ],canActivate:[AuthGuard],canDeactivate:[DeAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
