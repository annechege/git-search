import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import{ FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDispalyComponent } from './form-dispaly/form-dispaly.component';
import { RepositoryComponent } from './repository/repository.component';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component'
@NgModule({
  declarations: [
    AppComponent,
    FormDispalyComponent,
    RepositoryComponent,
    NavBarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
