import { SorteioPage } from './app.po';

describe('sorteio App', () => {
  let page: SorteioPage;

  beforeEach(() => {
    page = new SorteioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
