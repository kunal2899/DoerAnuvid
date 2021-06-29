import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
import { DatabaseService } from './services/database.service';
import {HttpClientModule} from '@angular/common/http'
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { FindComponent } from './find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    HomeComponent,
    UpdateComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    HttpClientModule
=======
    BrowserAnimationsModule
>>>>>>> 43d3349678f1999945e5866c6c902cdbe5dc09d8
  ],
  providers: [AuthenticationService,DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
