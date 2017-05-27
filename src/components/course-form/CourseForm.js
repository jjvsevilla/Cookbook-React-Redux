import React from 'react';
import { TextInput, SelectInput } from '../../common';

const CourseForm = ({ course, allAuthors, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <TextInput
        name="title"
        label="Title"
        value={ course.title }
        onChange={ onChange }
        error={ errors.title }/>

      <SelectInput
        name="authorId"
        label="Author"
        value={ course.authorId }
        defaultOption="Select Author"
        options={ allAuthors }
        onChange={ onChange } error={ errors.authorId }/>

      <TextInput
        name="category"
        label="Category"
        value={ course.category }
        onChange={ onChange }
        error={ errors.category }/>

      <TextInput
        name="length"
        label="Length"
        value={ course.length }
        onChange={ onChange }
        error={ errors.length }/>

      <input
        type="submit"
        disabled={ saving }
        value={ saving ? 'Saving...' : 'Save' }
        className="btn btn-primary"
        onClick={ onSave }/>
    </form>
  );
 };

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired
 };

export default CourseForm;
