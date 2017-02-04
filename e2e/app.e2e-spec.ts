import { SnTextMinerPage } from './app.po';

describe('sn-text-miner App', function() {
  let page: SnTextMinerPage;

  beforeEach(() => {
    page = new SnTextMinerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
