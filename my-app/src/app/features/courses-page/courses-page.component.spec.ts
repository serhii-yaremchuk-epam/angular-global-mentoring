import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { Course } from '../../shared/models/course.model';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        CoursesPageComponent,
        CoursesItemComponent,
        DurationPipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize courses', () => {
    expect(component.courses[0].title).toEqual('Video Course 1. Name tag');
    expect(component.courses[1].title).toEqual('Video Course 2. Name tag');
    expect(component.courses[2].title).toEqual('Video Course 3. Name tag');
  });

  it('onFind should log searchQuery', () => {
    // arrange
    const testQuery = 'test';
    component.searchQuery = testQuery;
    spyOn(console, 'log');

    // act
    component.onFind();

    // assert
    expect(console.log).toHaveBeenCalledWith(testQuery);
  });

  it('onLoadMore should log proper data', () => {
    // arrange
    spyOn(console, 'log');

    // act
    component.onLoadMore();

    // assert
    expect(console.log).toHaveBeenCalledWith('load more called');
  });

  it('onDelete should log course id', () => {
    // arrange
    const courseMock: Course = {
      id: '1',
      title: 'Video Course 1. Name tag',
      description: 'Learn about',
      creationDate: new Date(2020, 10, 4),
      duration: 3805
    };
    spyOn(console, 'log');

    // act
    component.onDelete(courseMock);

    // assert
    expect(console.log).toHaveBeenCalledWith(courseMock.id);
  });
});
