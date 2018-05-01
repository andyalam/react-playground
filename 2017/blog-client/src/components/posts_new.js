import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

// Define stateless component to render input and errors
const renderInput = field => {
  let inputElement = null;
  if (!field.textarea) {
    inputElement = <input {...field.input} type={field.type} className="form-control"/>;
  } else {
    inputElement = <textarea {...field.input} className="form-control"/>;
  }

  return (
    <div className={`form-group ${field.meta.touched && field.meta.invalid ? 'has-danger': '' }`}>
      <label htmlFor="title">Title</label>
      {inputElement}
      {field.meta.touched &&
       field.meta.error &&
       <div className="text-help">
        {field.meta.error}
        </div>}
    </div>
  );
}

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog past has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <Field
          name="title"
          component={renderInput}
          type="text" />

        <Field
          name="categories"
          component={renderInput}
          type="text" />

        <Field
          name="content"
          component={renderInput}
          textarea={true}
          type="text" />

        <div className="text-right">
          <Link to="/" className="btn btn-danger">Cancel</Link>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if (!values.content) {
    errors.content = 'Enter content';
  }

  return errors;
}

export default connect(null, { createPost })(reduxForm({
  form: 'PostsNewForm',
  validate
})(PostsNew));
