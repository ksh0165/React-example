const Counter = ({number,increase,decrease,dispatch}) => {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=>dispatch(increase(1))}>+1</button>
            <button onClick={()=>dispatch(decrease())}>-1</button>
        </div>
    );
}

export default Counter;