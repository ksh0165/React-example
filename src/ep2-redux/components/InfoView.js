import { useSelector } from "react-redux";
const InfoView = () => {
    const name = useSelector(state => state.mainReducer.name || '');
    const nickname = useSelector(state => state.mainReducer.nickname || '');

    return(
        <div>
            <b>이름 : {name}</b>
            <b>닉네임 : {nickname}</b>
        </div>
    );
}

export default InfoView;