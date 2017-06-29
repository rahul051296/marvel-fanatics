import { MarvelFanaticsAngularFourPage } from './app.po';

describe('marvel-fanatics-angular-four App', () => {
  let page: MarvelFanaticsAngularFourPage;

  beforeEach(() => {
    page = new MarvelFanaticsAngularFourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
