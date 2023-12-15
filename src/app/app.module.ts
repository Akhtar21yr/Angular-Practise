import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Child2Component } from './child2/child2.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsdtoinrPipe } from './pipes/usdtoinr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    Child2Component,
    UsdtoinrPipe
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
