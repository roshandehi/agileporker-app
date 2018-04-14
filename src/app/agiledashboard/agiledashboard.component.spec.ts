import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgiledashboardComponent } from './agiledashboard.component';

describe('AgiledashboardComponent', () => {
  let component: AgiledashboardComponent;
  let fixture: ComponentFixture<AgiledashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgiledashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgiledashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
