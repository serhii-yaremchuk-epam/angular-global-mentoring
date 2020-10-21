import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemComponent } from './courses-item.component';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';
import { By } from '@angular/platform-browser';

describe('CoursesItemComponent', () => {
  let component: CoursesItemComponent;
  let fixture: ComponentFixture<CoursesItemComponent>;
  const courseMock = {
      id: '1',
      title: 'Video Course 1. Name tag',
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details ' +
        'about various components of a course description. Course descriptions report information about a university or college\'s classes. ' +
        'They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for ' +
        'all courses offered during a particular semester.',
      creationDate:  new Date(2020,10,4),
      duration: 3805
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesItemComponent,
        DurationPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemComponent);
    component = fixture.componentInstance;
    component.course = courseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onDelete should emmit delete action with course', () => {
    // arrange
    const newComponent = new CoursesItemComponent();
    newComponent.course = courseMock;
    spyOn(newComponent.delete, 'emit');

    // act
    newComponent.onDelete();

    // assert
    expect(newComponent.delete.emit).toHaveBeenCalledWith(courseMock);
  });

  it('onDelete should be called after the delete button was clicked', () => {
    // arrange
    spyOn(component, 'onDelete');

    // act
    fixture.debugElement.query(By.css('.course-item__delete-button')).triggerEventHandler('click', null);
    fixture.detectChanges();

    // assert
    expect(component.onDelete).toHaveBeenCalled();
  });
});
