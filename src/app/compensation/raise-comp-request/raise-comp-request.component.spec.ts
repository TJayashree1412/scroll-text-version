import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseCompRequestComponent } from './raise-comp-request.component';

describe('RaiseCompRequestComponent', () => {
  let component: RaiseCompRequestComponent;
  let fixture: ComponentFixture<RaiseCompRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseCompRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseCompRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
