import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompRequestComponent } from './edit-comp-request.component';

describe('EditCompRequestComponent', () => {
  let component: EditCompRequestComponent;
  let fixture: ComponentFixture<EditCompRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
