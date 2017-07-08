import { Devfest2017Page } from './app.po';

describe('devfest2017 App', () => {
  let page: Devfest2017Page;

  beforeEach(() => {
    page = new Devfest2017Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
