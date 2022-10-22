import React from 'react';
import {ManType} from './destructuring.test';

type PropsType = {
    title: string
    man: ManType
    food:string[]
    car:{model:string}
}
const ManComponent: React.FC<PropsType> = ({title, man})=> {  // - ещё вариант сделать деструктуризацию в аргументе.
// const ManComponent: React.FC<PropsType> = (props) => {  // альтернатива деструктуризации
//     const {title, man} = props;
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
        </div>
    )
}