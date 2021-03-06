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
import { AuthGuard } from './services/auth.guard';
import { DeAuthGuard } from './services/de-auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    HomeComponent,
    UpdateComponent,
    FindComponent,
    ForbiddenComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService,DatabaseService,AuthGuard,DeAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
