import {StudentType} from '../02/02';

const sum = (a:number, b:number) => {
    return a+b;
}

export const res = sum(sum(1,2), sum(1,3));

export const addSkill = (st:StudentType, technology:string)=>{
    st.technologies.push({
        id:new Date().getTime(),
        title:technology
    })
}

export const makeStudentActive = (student:StudentType) => {
    student.isActive = true;
}

export const doesStudLiveInCity = (st:StudentType, city:string) => {
    return st.address.city.title === city;
}


