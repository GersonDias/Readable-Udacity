import React from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../services/ReadableAPI';

class posts extends React.Component {
  static propTypes = {};

  state = {
    posts: [],
  };

  componentDidMount() {
    getAllPosts().then(res => this.setState({ posts: res }));
  }

  render = () => (
    <div>
      <h1>Posts</h1>
      <ul>
        {this.state.posts.map(post => {
          return (
            <li key={post.id}>
              {post.title} ({post.category})
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(posts);
