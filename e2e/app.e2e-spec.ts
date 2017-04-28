import { DowFloraAsiaPage } from './app.po';

describe('dow-flora-asia App', function() {
  let page: DowFloraAsiaPage;

  beforeEach(() => {
    page = new DowFloraAsiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
