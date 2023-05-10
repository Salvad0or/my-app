import React from 'react'
import style from './Post.module.css'
import MyButton from '../UI/Buttons/MyButton'

const PostItem = ({ title, description, id , deletePost }) => {
    return (
        <div className={style.container}>
            
            <div>
            Title : {title}
            </div>

            <div>
            Desc : {description}
            
            </div>

            <div>
            Id : {id}
            </div>

            <MyButton onClick = {e => deletePost(id)}>Удолить</MyButton>
        </div>
        
    )
}

export default PostItem