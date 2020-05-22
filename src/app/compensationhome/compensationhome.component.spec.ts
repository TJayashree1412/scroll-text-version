import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationhomeComponent } from './compensationhome.component';

describe('CompensationhomeComponent', () => {
  let component: CompensationhomeComponent;
  let fixture: ComponentFixture<CompensationhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
