import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLifeCycleHooksComponent } from './test-life-cycle-hooks.component';

describe('TestLifeCycleHooksComponent', () => {
  let component: TestLifeCycleHooksComponent;
  let fixture: ComponentFixture<TestLifeCycleHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLifeCycleHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLifeCycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
