import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompRequestsComponent } from './my-comp-requests.component';

describe('MyCompRequestsComponent', () => {
  let component: MyCompRequestsComponent;
  let fixture: ComponentFixture<MyCompRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
