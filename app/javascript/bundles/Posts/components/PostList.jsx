import React from 'react'

export const PostList = ({posts } )=>
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            {post.content}
          </li>
        )
      })}
    </ul>
