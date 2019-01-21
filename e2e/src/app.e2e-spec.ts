import { browser } from 'protractor';
import { LoginPage } from './login.po';

describe('workspace-project App', () => {
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
  });

  it('should display title app on login', () => {
    loginPage.navigateTo();
    expect(loginPage.getTitleText()).toEqual('GitHub Client');
  });

  it('should log in', () => {
    loginPage.login().then(() => {
      browser.sleep(4000);
      browser.getCurrentUrl().then(url => {
        const match = url.endsWith('/issue-list');
        expect(match).toBeTruthy();
      });
    });
  });



});
