import { browser, by, element } from 'protractor';

const token = 'insert_your_github_access_token';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getTitleText() {
    return element(by.css('mat-card-title')).getText();
  }

  login() {
    return element(by.name('token')).sendKeys(token).then(() => {
      return element(by.css('mat-card-actions button')).click();
    });
  }
}
