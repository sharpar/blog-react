import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // React lifecylce event, runs automatically on component render
    const { id } = this.props.match.params; // params object provided by react router
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
      // call back to the action creater,
      // which will be called after the a.c is done executing
    });
  }

  render() {
    const { post } = this.props;

    if (!post) return <div>Loading...</div>;

    return (
      <div>
        <Link to={'/'}>Back to index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const add = (a, b) => {
  return a + b;
};

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { deletePost, fetchPost }
)(PostsShow);
