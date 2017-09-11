import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFromComponent } from './new-course-from.component';

describe('NewCourseFromComponent', () => {
  let component: NewCourseFromComponent;
  let fixture: ComponentFixture<NewCourseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
