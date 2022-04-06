import React from 'react';
const TodoItem = ({todo, onToggle, onRemove,dispatch}) => {
    return (
        <div>
            <input type="checkbox" onClick={()=>dispatch(onToggle(todo.id))} checked={todo.done} readOnly={true}/>
            <span style={{textDecoration: todo.done ? 'line-through':'none'}}>{todo.text}</span>
            <button onClick={()=>dispatch(onRemove(todo.id))}>삭제</button>
        </div>
    );
}

const Todos = ({input, todos, onChangeInput, onInsert, onToggle, onRemove,dispatch}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(onInsert(input));
        dispatch(onChangeInput(''));
    };
    const onChange = (e) => {
        dispatch(onChangeInput(e.target.value));
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={input} placeholder="해야 할 일" onChange={onChange}/>
                <button type="submit">등록</button>
            </form>
            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} dispatch={dispatch}/>
            ))}
        </div>
    );
}
export default Todos;