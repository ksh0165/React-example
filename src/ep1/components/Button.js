const Button = ({onClickIncrease,onClickDecrease}) => {
    return (
        <div>
            <button onClick={onClickIncrease}>+</button>
            <button onClick={onClickDecrease}>-</button>
        </div>
    )
}

export default Button;