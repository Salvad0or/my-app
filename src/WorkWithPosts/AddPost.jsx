import React, { useState } from 'react'
import MyInput from '../UI/Inputs/MyInput'
import MyButton from '../UI/Buttons/MyButton'

const AddPost = ({addPost}) => {


    const [values, changeValue] = useState({name : '', description : ''})

    const addNewPost = () => {
        
        let newPost = {
            id: 0, 
            name : values.name,
            description : values.description
        }

        addPost(newPost);
    }


  return (
    
   
    <div>
        <h1>Добавить пост</h1>

        <MyInput 
        placeholder = {'Пост'}
        value = {values.name}
        onChange = { e => changeValue({...values, name : e.target.value})}/>

        <MyInput 
        placeholder = {'Описание'}
        value = {values.description}
        onChange = { e => changeValue({...values, description: e.target.value})}
        />

        <MyButton onClick = {addNewPost}>Добавить пост</MyButton>

    </div>
  )
}

export default AddPost