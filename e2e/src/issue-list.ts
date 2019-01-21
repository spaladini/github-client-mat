import { browser, by, element } from 'protractor';

export class IssueListPage {

  navigateTo() {
    return browser.get('/issue-list');
  }

  getTitle() {
    return element(by.css('#main-title')).getText();
  }

  getPageSize() {
    return element(by.css('.mat-select-value-text > span')).getText();
  }

  changePageSize(size: number) {
    return element(by.css('.mat-select-value-text > span')).click().then(() => {
      return element(by.cssContainingText('.mat-option .mat-option-text', size.toString())).click();
    });
  }

  getIssuesNumber() {
    return element(by.css('.mat-paginator-container .mat-paginator-range-label')).getText().then(pagTxt => {
      const splitted = pagTxt.split(' ');
      if (splitted.length > 0) {
        return splitted[splitted.length - 1];
      } else {
        return null;
      }
    });
  }

  clickIdOrderButton() {
    return element(by.cssContainingText('.mat-sort-header-button', 'No.')).click();
  }

  getFirstIssueNo() {
    return element(by.css('tbody > tr:first-child > td:first-child')).getText();
  }

  clickOnNewIssue() {
    return element(by.id('add-issue-button')).click();
  }

}
