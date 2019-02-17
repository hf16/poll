import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionComponent} from './question.component';
import {QuestionDetailComponent} from './question-detail/question-detail.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionComponent
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: QuestionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule {
}
