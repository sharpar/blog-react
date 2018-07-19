import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // like anchor tag, to go to diff pages/components
import { fetchPosts } from '../actions'; // the action creator

class PostsIndex extends Component {
  componentDidMount() {
    // React lifecylce event, runs automatically on component render
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className={'list-group-item'} key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className={'text-xs-right'}>
          <Link className="btn btn-primary" to={'/posts/new'}>
            Add a post
          </Link>
        </div>
        <h3>Blog Posts</h3>
        <ul className={'list-group'}>{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // map app state to component state?
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex); // wiring up the action creator
