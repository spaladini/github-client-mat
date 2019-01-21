import { browser, by, element } from 'protractor';

export class IssueListPage {

  navigateTo() {
    return browser.get('/issue-list');
  }

  getTableHeaders() {
    const hs = element.all(by.className('.mat-sort-header-button')).then((headers: any[]) => {
      console.log(headers);
      browser.sleep(45000);

      headers.map(h => {
        browser.sleep(15000);
        const headerTxt = h.getText();
        console.log(headerTxt);
        alert(headerTxt);
      });
      browser.sleep(15000);

    });


    return hs;
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

}
