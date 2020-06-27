import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdirectivesComponent } from './testdirectives.component';

describe('TestdirectivesComponent', () => {
  let component: TestdirectivesComponent;
  let fixture: ComponentFixture<TestdirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
