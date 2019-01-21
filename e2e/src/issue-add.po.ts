import { browser, by, element } from 'protractor';

export class IssueAddPage {

  navigateTo() {
    return browser.get('/issue-add');
  }

  getTitle() {
    return element(by.tagName('h2')).getText();
  }

}
