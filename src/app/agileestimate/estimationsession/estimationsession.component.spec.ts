import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationsessionComponent } from './estimationsession.component';

describe('EstimationsessionComponent', () => {
  let component: EstimationsessionComponent;
  let fixture: ComponentFixture<EstimationsessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationsessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
