import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications';
import { AppComponent } from './app.component';

class MockTranslateService {
  public addLangs(langs: Array<string>) { }
  public setDefaultLang(lang: string) { }
  public use(lang: string) { }
  public getBrowserLang(): string {
    return 'it';
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SimpleNotificationsModule
      ],
      providers: [
        { provide: TranslateService, useClass: MockTranslateService },
        { provide: NotificationsService }
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'github-client-mat'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('github-client-mat');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to github-client-mat!');
  });
});
