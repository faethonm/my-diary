import PropTypes from 'prop-types';
import React from 'react';

export default class Posts extends React.Component {
  static propTypes = {
    posts: PropTypes.object.isRequired, // this is passed from the Rails view
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
      posts: this.props.posts };
  }

  render() {
    return (
      <div>
        <h3>
          Hello
        </h3>
        <hr />
        {this.state.posts.map((post) => {
          console.log(post.content)
        })}
      </div>
    );
  }
}
