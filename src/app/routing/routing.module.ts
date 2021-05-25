import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormDispalyComponent } from '../form-dispaly/form-dispaly.component';
import { RepositoryComponent } from '../repository/repository.component'

const routes: Routes = [
  {path:"form-display",component:FormDispalyComponent},
  {path:"repo",component:RepositoryComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  // declarations: []
})
export class RoutingModule { }
