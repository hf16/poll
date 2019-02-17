import { QuestionModule } from './question.module';

describe('QuestionDetailModule', () => {
  let appQuestionModule: QuestionModule;

  beforeEach(() => {
    appQuestionModule = new QuestionModule();
  });

  it('should create an instance', () => {
    expect(appQuestionModule).toBeTruthy();
  });
});
