import React ,{ useState ,useRef, useCallback}from 'react';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import TodoTemplate from '../components/TodoTemplate';

//npm install node-sass react-icons
// https://github.com/velopert/learning-react/tree/master/10/todo-app
// npm install classnames
const App = () => {

    const [todos,setTodos] = useState([
        {
            id: 1,
            text: '그냥리액트',
            checked: true
        },
        {
            id: 2,
            text: '그냥리액트2',
            checked: false
        }
    ]);

    const nextId = useRef(3);

    const onInsert = useCallback((text)=>{
        const todo = {
            id: nextId.current,
            text: text,
            checked: false
        }
        setTodos(todos.concat(todo));
        nextId.current += 1;
    },[todos]);

    const onRemove = useCallback((id)=>{
        setTodos(todos.filter((todo)=>(
            todo.id !== id
        )))
    },[todos])

    const onToggle = useCallback((id)=>{
        setTodos(todos.map((todo)=>(
            todo.id === id ? {
                ...todo, checked: !todo.checked
            } : todo
        )))
    },[todos])

    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </TodoTemplate>
        </div>
    );
}

export default App;