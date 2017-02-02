import { KerkoWebsiteAngularPage } from './app.po';

describe('kerko-website-angular App', function() {
  let page: KerkoWebsiteAngularPage;

  beforeEach(() => {
    page = new KerkoWebsiteAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
