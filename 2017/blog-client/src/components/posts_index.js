import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log(this.props.posts[0]);
    return this.props.posts.map((post) => {
      return (
        <Link to={`posts/${post.id}`} className="single-post" key={post.id}>
          <li className="list-group-item">
            <span className="float-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </li>
        </Link>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary add-post">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts } )(PostsIndex);
