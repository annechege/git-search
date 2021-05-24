import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDispalyComponent } from './form-dispaly/form-dispaly.component';
import { RepositoryHttpComponent } from './repository-http/repository-http.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDispalyComponent,
    RepositoryHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
