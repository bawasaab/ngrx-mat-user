import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'master/:id',
    component: MasterComponent
  },
  {
    path: 'master',
    component: MasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
