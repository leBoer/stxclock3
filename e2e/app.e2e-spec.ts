import { Stxclock3Page } from './app.po';

describe('stxclock3 App', () => {
  let page: Stxclock3Page;

  beforeEach(() => {
    page = new Stxclock3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
