import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0HomeComponent } from './auth0-home.component';

describe('Auth0HomeComponent', () => {
  let component: Auth0HomeComponent;
  let fixture: ComponentFixture<Auth0HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth0HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
