import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { MaterialModule } from '../shared/material/material.module';
import {QuestionDetailComponent} from './question-detail/question-detail.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    MaterialModule,

  ],
  declarations: [
    QuestionComponent,
    QuestionDetailComponent
  ]
})
export class QuestionModule { }
