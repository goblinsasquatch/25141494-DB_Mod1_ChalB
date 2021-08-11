import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeniorOfficersComponent } from './senior-officers/senior-officers.component';
import { SpecificForceComponent } from './specific-force/specific-force.component';

@NgModule({
  declarations: [AppComponent, SeniorOfficersComponent, SpecificForceComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
