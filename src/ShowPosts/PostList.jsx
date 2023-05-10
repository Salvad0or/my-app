import React from 'react'
import PostItem from './PostItem'
import MyButton from '../UI/Buttons/MyButton'


const PostList = ({posts, deletePost}) => {
  return (

    <div>
      {
        posts.map(post => 
          <PostItem title = {post.title} id = {post.id} description = {post.description} deletePost = {deletePost} />)
      }
     
      
    </div>
  )
}

export default PostList