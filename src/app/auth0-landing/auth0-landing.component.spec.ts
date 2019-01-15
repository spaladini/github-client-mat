import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth0LandingComponent } from './auth0-landing.component';

describe('Auth0LandingComponent', () => {
  let component: Auth0LandingComponent;
  let fixture: ComponentFixture<Auth0LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth0LandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
