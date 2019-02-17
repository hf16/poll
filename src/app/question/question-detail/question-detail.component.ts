import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/appState';
import {OpenSidenav, CloseSidenav, SetAppTitle} from '../../core/layout/layout.actions';
import {QuestionService} from '../../core/services/question.service';
import {Question} from '../../core/models/question';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  constructor(private layoutStore: Store<AppState>,
              private questionService: QuestionService,
              private router: Router,
              protected route: ActivatedRoute) {
  }

  protected question: Question;

  ngOnInit() {
    this.layoutStore.dispatch(new SetAppTitle('question detail'));
    this.route.params.subscribe(params => {
      const questionId = params['id'];
      this.getQuestionDetail(questionId);
    });
  }

  getQuestionDetail(questionId: number) {
    this.questionService.getQuestionsById(questionId).subscribe((questions) => {
      this.question = questions;
    }, error => {
      console.log('error', JSON.stringify(error));
    });
  }

  close() {
    this.router.navigate(['questions']);
  }

  vote(choiceUrl: string) {
    this.questionService.vote(choiceUrl).subscribe((response) => {
      console.log(response);
      this.router.navigate(['questions']);
    }, error => {
      console.log('error', JSON.stringify(error));
    });
  }

}
