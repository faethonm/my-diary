import PropTypes from 'prop-types';
import React from 'react';
import {PostList} from './PostList.jsx';
import moment from 'moment'

export default class Posts extends React.Component {
  static propTypes = {
    posts: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  static defaultProps = {
    posts: []
  }

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = {
      posts: this.props.posts,
      content: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let post = {
      content:  this.state.content
    }
    $.post('/posts/',
      {post} )
    .done((data)=> {
      const posts = this.state.posts
      posts.push(data);
      this.setState({
        posts: posts
      })
    })
  }

  handleChange(e){
    this.setState({
      content: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>
          Hello
        </h3>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <textarea rows="4" cols="50" name="content" form="usrform"
            onChange={this.handleChange}>
          </textarea>
        <input type="submit" value="Add post"/>
        </form>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}
