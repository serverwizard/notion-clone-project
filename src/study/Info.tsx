import {ChangeEvent, useEffect, useState} from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');
    useEffect(() => {
        console.log('랜더링이 완료됐습니다.');
        console.log({name, nickName})
    }, []);

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
        setNickName(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickName} onChange={onChangeNickName}/>
            </div>
            <div>
                <div>
                    이름: {name}
                </div>
                <div>
                    닉네임: {nickName}
                </div>
            </div>
        </div>
    );
}

export default Info;