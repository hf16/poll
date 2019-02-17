import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Question} from '../models/question';

@Injectable()
export class QuestionService {

  constructor(protected httpClient: HttpClient) {
  }

  getQuestions(pageNumber: number) {
    return this.httpClient.get<Question[]>(environment.API_URL + '/questions?page=' + pageNumber,
      {headers: {'Content-Type': 'application/json'}});
  }

  getQuestionsById(id: number) {
    return this.httpClient.get<Question>(environment.API_URL + '/questions/' + id,
      {headers: {'Content-Type': 'application/json'}});
  }

  vote(choiceUrl: string) {
    return this.httpClient.post(environment.API_URL + choiceUrl,
      {headers: {'Content-Type': 'application/json'}});
  }

}
