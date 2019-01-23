import { browser } from 'protractor';
import { IssueListPage } from './issue-list.po';
import { LoginPage } from './login.po';

describe('workspace-project App', () => {
  // let page: AppPage;
  let loginPage: LoginPage;
  let issueListPage: IssueListPage;

  beforeEach(() => {
    // page = new AppPage();
    loginPage = new LoginPage();
    issueListPage = new IssueListPage();
  });

  it('should display login title', () => {
    loginPage.navigateTo();
    expect(loginPage.getTitleText()).toEqual('GitHub Client');
  });

  it('should login', () => {
    // expect(loginPage.getTitleText()).toEqual('GitHub Client');
    loginPage.login().then(() => {
      browser.getCurrentUrl().then(url => {
        const match = url.endsWith('/issue-list');
        expect(match).toBeTruthy();
        browser.sleep(3000);
      });
    });
  });

  it('should have title bar', () => {
    issueListPage.getTitle().then(title => {
      expect(title).toBeDefined();
      expect(title).toBeTruthy();
      expect(title).toContain('spaladini');
    });
  });

  it('paginator should have 5 as default', () => {
    issueListPage.getDefaultPageSize().then(size => {
      expect(size).toEqual('5');
    });
  });

  it('should change paginator size', () => {
    issueListPage.setPaginatorDefault(10).then(() => {
      issueListPage.getDefaultPageSize().then(size => {
        expect(size).toEqual('10');
        browser.sleep(2000);
      });
    });
  });

  it('should have more than 10 issues', () => {
    issueListPage.getTableSize().then(size => {
      expect(size).toBeGreaterThan(10);
    });
  });

  it('should have last issue on top of the table', () => {
    issueListPage.getFirstIssueNumber().then(number => {
      issueListPage.getTableSize().then(size => {
        expect(number).toEqual(size.toString());
      });
    });
  });

  it('should order by issue No.', () => {
    issueListPage.clickOrderButton().then(() => {
      issueListPage.getFirstIssueNumber().then(number => {
        browser.sleep(2000);
        expect(number).toEqual('1');
      });
    });
  });

  it('should have a new issue button', () => {
    const button = issueListPage.getAddIssueButton();
    expect(button).toBeDefined();
    expect(button).toBeTruthy();
  });

  it('should navigate to add issue page', () => {
    issueListPage.clickOnAddIssue().then(() => {
      browser.getCurrentUrl().then(url => {
        const match = url.endsWith('/issue-add');
        expect(match).toBeTruthy();
        browser.sleep(3000);
      });
    });
  });

});
