import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from '../../components/course-list/CourseList';
import { PageContainer } from '../../common';

function mapStateToProps(state, ownProps = {}){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class CoursesPage extends Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const { courses } = this.props;
    return (
      <PageContainer title="Courses Page">
        <input type="submit" value="add course" className="btn btn-primary" onClick={ this.redirectToAddCoursePage } />
        <CourseList courses={ courses } />
      </PageContainer>
    );
  }
}
