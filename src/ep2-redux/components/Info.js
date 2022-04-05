import React, {useCallback, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import InfoView from './InfoView';

const Info = () => {
    // const [state, dispatch] = useReducer(reducer,{data: {name:'',nickname:''}});
    const dispatch = useDispatch();

    const changeName = useCallback((type)=>dispatch({type: type ,state: {
        name:nameRef.current.value,
        nickname:nicknameRef.current.value
    }}),[]);

    const changeNickname = useCallback((type)=>dispatch({type: type ,state: {
        name:nameRef.current.value,
        nickname:nicknameRef.current.value
    }}),[]);

    const name = useSelector((state) => state.mainReducer.name || '');
    const nickname = useSelector(state => state.mainReducer.nickname || '');

    const nameRef = useRef(null);
    const nicknameRef = useRef(null);

    const onChange = (key) => {
        console.log(key + " " +nameRef.current.value+" "+nicknameRef.current.value);//잘 들어옴 name ㅁ

        if(key === 'name'){
            // dispatch({type: nameStr ,state: {
            //     name:nameRef.current.value,
            //     nickname:nicknameRef.current.value
            // }});
            changeName('name');
        }else{
            // dispatch({type: nicknameStr ,state: {
            //     name:nameRef.current.value,
            //     nickname:nicknameRef.current.value
            // }});
            changeNickname('nickname');
        }

    }
    return (
        <>
            <div>
                <input type="text" id={name} defaultValue={name} placeholder={name} ref={nameRef} onChange={()=>onChange("name")} />
                <input type="text" id={nickname} defaultValue={nickname} placeholder={nickname} ref={nicknameRef} onChange={()=>onChange("nickname")} />
            </div>
            <div>
                <InfoView />
            </div>
        </>
    );
}

export default Info;