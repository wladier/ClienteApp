import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { WebHostService } from "./web-host.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WebHostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
