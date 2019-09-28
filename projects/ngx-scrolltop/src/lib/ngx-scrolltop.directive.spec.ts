import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgxScrollTopDirective } from './ngx-scrolltop.directive';
import { Component } from '@angular/core';

@Component({
  template: '<span class="my-scroll-top-button" ngxScrollTop>Top</span>',
})
class TestComponent {
  constructor() {}
}

describe('NgxScrollTopDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NgxScrollTopDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should scroll to top', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const p: HTMLElement = debugEl.querySelector('.my-scroll-top-button');

    p.click();
    fixture.detectChanges();

    expect(document.documentElement.scrollTop).toBe(0);
  });
});
