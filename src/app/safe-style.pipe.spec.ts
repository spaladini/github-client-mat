import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { SafeStylePipe } from './safe-style.pipe';

describe('SafeStylePipe', () => {

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ],
        providers: [
        ]
      });
  });

  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new SafeStylePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
