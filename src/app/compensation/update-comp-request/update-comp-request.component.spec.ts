import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompRequestComponent } from './update-comp-request.component';

describe('UpdateCompRequestComponent', () => {
  let component: UpdateCompRequestComponent;
  let fixture: ComponentFixture<UpdateCompRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCompRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
