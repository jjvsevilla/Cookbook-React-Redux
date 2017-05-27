import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, HomePage, AboutPage, CoursesPage, CoursePage, NotFoundPage } from './containers';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="courses" component={ CoursesPage } />
    <Route path="course" component={ CoursePage } />
    <Route path="course/:id" component={ CoursePage } />
    <Route path="about" component={ AboutPage } />    
    <Route path="*" component={ NotFoundPage } />
  </Route>
);