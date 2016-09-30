import { SupperSelectorPage } from './app.po';

describe('supper-selector App', function() {
  let page: SupperSelectorPage;

  beforeEach(() => {
    page = new SupperSelectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
