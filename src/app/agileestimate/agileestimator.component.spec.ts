import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileEstimatorComponent } from './agileestimator.component';

describe('AgileEstimatorComponent', () => {
  let component: AgileEstimatorComponent;
  let fixture: ComponentFixture<AgileEstimatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileEstimatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileEstimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
