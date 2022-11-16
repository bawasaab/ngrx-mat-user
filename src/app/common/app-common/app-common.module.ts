import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMatModule } from "../../common/ng-mat/ng-mat.module";
import { ReactiveFormsModule } from '@angular/forms';

const modules = [
  NgMatModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    modules
  ]
})
export class AppCommonModule { }
