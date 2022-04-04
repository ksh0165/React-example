import React from 'react';
import Count from '../components/Count';
import Button from '../components/Button';
import {connect} from 'react-redux';
import { actionIncrement, actionDecrement } from '../actions';
const App = (props) => {
    return (
        <div style={{textAlign : 'center'}}>
            <Count value={props.value} />
            <Button onClickIncrease = {props.onClickIncrease} 
                    onClickDecrease = {props.onClickDecrease} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onClickIncrease : () => {dispatch(actionIncrement())},
    onClickDecrease : () => {dispatch(actionDecrement())}
});

const mapStateToProps = (state) => {
    return {
        value : state.reducerCount.value
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);