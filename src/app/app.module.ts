import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputformComponent } from './inputform/inputform.component';
import { FooterComponent } from './footer/footer.component';
import { GetgitaccountService } from './getgitaccount.service';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputformComponent,
    FooterComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetgitaccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
