import React from 'react';
import { connect } from 'react-redux';
import { loadPosts } from './actions';

class posts extends React.Component {
  static propTypes = {};

  componentDidMount() {
    this.props.getAllPosts();
  }

  render = () => {
    return (
      <div>
        <h1>Posts</h1>
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Author</td>
              <td>Category</td>
              <td># Comments</td>
              <td>Current Score</td>
              <td>Votes</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map(post => {
              return (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td>{post.category}</td>
                  <td>{post.commentCount}</td>
                  <td>{post.voteScore}</td>
                  <td>Voting</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button>New Post</button>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts,
  };
};

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(loadPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(posts);
