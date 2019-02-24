import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { MaterialModule } from '../shared/material/material.module';
import {QuestionDetailComponent} from './question-detail/question-detail.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    QuestionComponent,
    QuestionDetailComponent
  ]
})
export class QuestionModule { }
