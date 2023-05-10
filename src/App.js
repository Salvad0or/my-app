
import { useMemo, useState } from 'react';
import './App.css';
import PostList from './ShowPosts/PostList';
import AddPost from './WorkWithPosts/AddPost';
import Select from './UI/Selects/Select'
import MyInput from './UI/Inputs/MyInput';

function App() {


  const [posts, changePosts] = useState([
    { id: 1, title: 'Яша', description: 'Описание1' },
    { id: 2, title: 'Аша', description: 'Описание2' },
    { id: 3, title: 'Джейл', description: 'Описание3' },
  ])

  const [changedSortAlgoritm, sortList] = useState('');

  const changeSortAlgoritm = (eTargetValue) => {

    sortList(eTargetValue);

  }

  /// Алгоритм поиска

  const[searchQuery, setSearchQuery] = useState('')

  const iSortPosts = useMemo(() => {

    if(changedSortAlgoritm) // Если строка выбора сортировки не пустая мы возвращяем отсортированный массив
    {
      return [...posts].sort((a, b) => a[changedSortAlgoritm].localeCompare(b[changedSortAlgoritm]))
    }

    return posts // если сортировка не была выбрана просто возвращяем посты

  }, [changedSortAlgoritm, posts] ) // Функция сортировки будет вызвана только в случае изменения какой-либо из зависимостей

  const iMakeSearch = useMemo(() => {

    return iSortPosts.filter(f => f.title.toLowerCase().includes(searchQuery))

  }, [searchQuery, iSortPosts]) // здесь одновременно работает и поиск, и сортировка


  //Всё удали и метод поиска еще раз.
  
  const addPost = (newPost) => {

    let id = posts.length;

    newPost.id = id + 1;

    changePosts([...posts, newPost])
  }

  const deletePost = (id) => {

    changePosts([...posts].filter(i => i.id != id))

  }

  return (
    <div className="App">
      <AddPost addPost={addPost} />

      <MyInput
        value = {searchQuery}
        onChange = {e => setSearchQuery((e.target.value))}
        placeholder={'поиск'}
        


      />
      <PostList posts={iMakeSearch} deletePost={deletePost}></PostList>


      <Select
        defaultValue={'Сортировка'}
        value={changedSortAlgoritm}
        onChange={changeSortAlgoritm}
        options={
          [
            { name: 'По заголовку', value: 'title' },
            { name: 'По описанию', value: 'description' },
          ]
        }

      />

    </div>
  );
}

export default App;
