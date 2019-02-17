import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'questions',
    loadChildren: './question/question.module#QuestionModule'
  },
  {
    path: 'questions/:id',
    loadChildren: './question/question.module#QuestionModule'
  },
  {
    path: '**',
    redirectTo: 'questions'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
