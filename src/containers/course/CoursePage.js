import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import { getItemById, formattedForDropdown } from '../../helpers/utils';
import { CourseForm } from '../../components';
import { PageContainer } from '../../common';
import materializecss from 'materialize-css';
import toastr from 'toastr';
import autobind from 'autobind-decorator';

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  if (courseId && state.courses.length > 0) {
    course = getItemById(state.courses, courseId);
  }

  const formattedAuthors = formattedForDropdown(state.authors, 'id', ['firstName', 'lastName']);
  return {
    course: course,
    authors: formattedAuthors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class CoursePage extends React.Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };
  }

  componentDidMount() {
    // $('select[name="authorId"]').material_select();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  @autobind
  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({ course: course });
  }

  @autobind
  saveCourse(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }

  render() {
    return (
      <PageContainer title="Manage Course">
        <CourseForm
          onChange={ this.updateCourseState }
          onSave={ this.saveCourse }
          allAuthors={ this.props.authors }
          course={ this.state.course }
          errors={ this.state.errors }
          saving={ this.state.saving } />
      </PageContainer>
    );
  }
}
