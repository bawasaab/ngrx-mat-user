import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { MasterComponent } from './master/master.component';
import { AppCommonModule } from 'src/app/common/app-common/app-common.module';


@NgModule({
  declarations: [
    ListComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AppCommonModule
  ]
})
export class UserModule { }
