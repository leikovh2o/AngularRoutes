import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaRouteComponent } from './java-route.component';

describe('JavaRouteComponent', () => {
  let component: JavaRouteComponent;
  let fixture: ComponentFixture<JavaRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
