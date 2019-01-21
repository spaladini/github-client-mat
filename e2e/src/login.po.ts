import { browser, by, element } from 'protractor';

const token = '0b0b286b6fb1d6bb73daabb9bbc0fdc533363cb7';

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getTitleText() {
    return element(by.css('mat-card-title')).getText();
  }

  setTokenInInput() {
    element(by.name('token')).sendKeys(token);
  }

  login() {
    element(by.name('token')).sendKeys(token);
    return element(by.tagName('button')).click();
  }

}
