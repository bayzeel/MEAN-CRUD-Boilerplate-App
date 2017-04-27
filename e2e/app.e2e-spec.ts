import { MEANCRUDBoilerplateAppPage } from './app.po';

describe('mean-crud-boilerplate-app App', () => {
  let page: MEANCRUDBoilerplateAppPage;

  beforeEach(() => {
    page = new MEANCRUDBoilerplateAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
