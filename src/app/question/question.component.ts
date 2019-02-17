import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../core/appState';
import {OpenSidenav, CloseSidenav, SetAppTitle} from '../core/layout/layout.actions';
import {QuestionService} from '../core/services/question.service';
import {Question} from '../core/models/question';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private layoutStore: Store<AppState>,
              private questionService: QuestionService,
              private router: Router) {
  }

  protected questions: Question[];

  ngOnInit() {

    this.layoutStore.dispatch(new SetAppTitle('questions'));
    this.getQuestions(1);
  }

  open(url: string) {
    this.router.navigate([url]);
  }

  getQuestions(pageNumber: number) {
    this.questionService.getQuestions(pageNumber).subscribe((questions) => {
      this.questions = questions;
    }, error => {
      console.log('error', JSON.stringify(error));
    });
  }

  previous() {
    // The goal is to show how you work, not to deliver production-ready code
  }

  next() {
    //  The goal is to show how you work, not to deliver production-ready code
  }

}
