import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';

// Define stateless component to render input and errors
const renderInput = field =>
  <div>
    <input {...field.input} type={field.type} className="form-control"/>
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>


class PostsNew extends Component {
  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    console.log('test', this.props.createPost);

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field
            name="title"
            component={renderInput}
            type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <Field
            name="categories"
            component={renderInput}
            type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea className="form-control" />
        </div>

        <div className="text-right">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

// connect: 1st arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default connect(null, { createPost })(reduxForm({ form: 'PostsNewForm', })(PostsNew));
