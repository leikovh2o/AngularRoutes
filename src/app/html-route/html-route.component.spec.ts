import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlRouteComponent } from './html-route.component';

describe('HtmlRouteComponent', () => {
  let component: HtmlRouteComponent;
  let fixture: ComponentFixture<HtmlRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
