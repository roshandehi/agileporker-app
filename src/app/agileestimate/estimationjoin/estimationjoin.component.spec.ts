import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationjoinComponent } from './estimationjoin.component';

describe('EstimationjoinComponent', () => {
  let component: EstimationjoinComponent;
  let fixture: ComponentFixture<EstimationjoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationjoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
