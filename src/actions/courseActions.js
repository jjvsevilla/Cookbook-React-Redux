import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

/* actions creators */
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

/* actions */
export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(savedCourse => dispatch(course.id ? updateCourseSuccess(savedCourse) : createCourseSuccess(savedCourse)))
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}
