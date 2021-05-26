import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import{FormDispalyComponent} from './form-dispaly/form-dispaly.component'
import{RepositoryComponent} from './repository/repository.component'
const routes: Routes = [
{ path: 'form-display', component: FormDispalyComponent},
{ path: 'repository', component: RepositoryComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
