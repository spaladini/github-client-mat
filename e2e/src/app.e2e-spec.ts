import { browser } from 'protractor';
import { IssueListPage } from './issue-list';
import { LoginPage } from './login.po';

describe('workspace-project App', () => {
  let loginPage: LoginPage;
  let issueListPage: IssueListPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    issueListPage = new IssueListPage();
  });

  it('should display title app on login', () => {
    loginPage.navigateTo();
    expect(loginPage.getTitleText()).toEqual('GitHub Client');
  });

  it('should log in', () => {
    loginPage.login().then(() => {
      browser.sleep(1000);
      browser.getCurrentUrl().then(url => {
        const match = url.endsWith('/issue-list');
        expect(match).toBeTruthy();
      });
    });
  });

  it('should have a title bar', () => {
    issueListPage.getTitle().then(title => {
      expect(title).toEqual('GitHub Client: spaladini/github-client');
    });
  });

  it('should have 20 issues', () => {
    issueListPage.getIssuesNumber().then(title => {
      expect(title).toEqual('20');
    });
  });

  it('should be page size == 5', () => {
    issueListPage.getPageSize().then(title => {
      expect(title).toEqual('5');
    });
  });

  it('should change page size to 10', () => {
    issueListPage.changePageSize(10).then(() => {
      browser.sleep(5000);
      issueListPage.getPageSize().then(title => {
        expect(title).toEqual('10');
      });
    });
  });


});
