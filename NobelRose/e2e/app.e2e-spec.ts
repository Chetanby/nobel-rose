import { NobelRosePage } from './app.po';

describe('nobel-rose App', () => {
  let page: NobelRosePage;

  beforeEach(() => {
    page = new NobelRosePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
