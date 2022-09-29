import {StudentType} from '../02/02';
import {addSkill, doesStudLiveInCity, makeStudentActive} from './03';

let student: StudentType;

beforeEach(() => {
    student =        {
            id:1,
            name:'Anton',
            age:32,
            isActive: false,
            address:{
                streetTitle:'Dubovaya 7',
                city: {
                    title:'Minsk',
                    countryTitle:'Russia'
                }
            },
            technologies:[
                {
                    id:1,
                    title:'HTML'
                },
                {
                    id:2,
                    title:'CSS'
                },
                {
                    id:3,
                    title:'React'
                },
            ]
        }
})

test(`new tech skill chould be added to student`,()=>{
    expect(student.technologies.length).toBe(3)

        addSkill(student,`JS`)

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined() // определено т.е. создано
})

test(`student should be active`,()=>{
    expect(student.isActive).toBe(false)

        makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('Does student live in city?',()=>{

    let res1= doesStudLiveInCity(student, `Moscow`)
    let res2= doesStudLiveInCity(student, `Minsk`)

    expect(res1).toBe(false)
    expect(res2).toBe(true)
})