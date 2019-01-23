import { browser, by, element } from 'protractor';

export class IssueListPage {

  navigateTo() {
    return browser.get('/issue-list');
  }

  getTitle() {
    return element(by.css('mat-toolbar #app-title')).getText();
  }

  getDefaultPageSize() {
    return element(by.css('.mat-paginator-container .mat-select-trigger .ng-star-inserted')).getText();
  }

  setPaginatorDefault(size: number) {
    return element(by.css('.mat-paginator-container .mat-select-trigger .ng-star-inserted')).click().then(() => {
      browser.sleep(1000);
      return element(by.cssContainingText('.mat-option .mat-option-text', size.toString())).click();
    });
  }

  getTableSize() {
    return element(by.css('.mat-paginator-range-actions .mat-paginator-range-label')).getText().then(text => {
      const splitted = text.split(' ');
      if (splitted.length > 0) {
        const sizeAsString: string = splitted[splitted.length - 1];
        return parseInt(sizeAsString);
      }
      return 0;
    });
  }

  getFirstIssueNumber() {
    return element(by.css('tbody > tr:first-child > td:first-child')).getText();
  }

  clickOrderButton() {
    return element(by.css('thead > tr:first-child > th:first-child button.mat-sort-header-button')).click();
  }

  clickOnAddIssue() {
    return this.getAddIssueButton().click();
  }

  getAddIssueButton() {
    return element(by.id('issue-add-link'));
  }

}
