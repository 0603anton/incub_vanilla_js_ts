const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//1. Поверхностная копия user
let copyUser = {...user}
// console.log(user === copyUser);
// console.log(user.friends === copyUser.friends);

//2. Полная (глубокая) копия user
let deepCopyUser = {...user, friends: [...user.friends]}
// console.log(user === deepCopyStudent);
// console.log(user.friends === deepCopyStudent.friends);

//3. Поверхностная копия students
const copyStudents = [...students];
// slice()
// console.log(students === copyStudents);
// console.log(students[0] === copyStudents[0]);

//4*. Полная (глубокая) копия students

let deepCopyStudents = students.map((el) => ({...el})) // TODO зачем в скобки оборачиваем
// console.log(students === deepCopyStudents);
// console.log(students[0] === deepCopyStudents[0]);
// console.log(students);
// console.log(deepCopyStudents);

//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
// console.log(deepCopyStudents.sort((a, b) => b.scores - a.scores))

//5a. Отсортируйте студентов по алфавиту
// function sortByName(a, b) {
//     switch (a.name > b.name) {
//         case true:
//             return 1;
//         case false:
//             return -1;
//         default:
//             return 0;
//     }
// }
// const sortedByName = deepCopyStudents.sort((a, b) => a.name >= b.name ? 1 : -1);
const sortedByName = students.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);

//6. Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter((el) => el.scores >= 100)
console.log(bestStudents)

//6a.Сформируйте массив из трёх лучших студентов
console.log(bestStudents.slice(0, 3))

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки тут spread или concat
const newDeepCopyStudents = [...bestStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов
let notMarriedStud = deepCopyStudents.filter((el) => !el.isMarried)
console.log(notMarriedStud)

//8. Сформируйте массив имён студентов
let studNames = deepCopyStudents.map((el) => el.name)
console.log(studNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой

let strStudNamesSpace = studNames.join(` `)
let strStudNamesComma = studNames.join(`,`)
console.log(strStudNamesSpace)
console.log(strStudNamesComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true
let StudentsWithIsStudent = deepCopyStudents.map((st) => ({...st, isStudent: true})) //TODO скобки
// если идёт просто возвращение литерала объекта, то необходимо использовать () повер фигурных

//10. Nick женился. Выполните преобразование массива students

let studentsWithMerriedNick = deepCopyStudents.map((el) => el.name === 'Nick' ? {...el, isMarried: true} : el); //TODO повтори решение
console.log(studentsWithMerriedNick)

//11. Найдите Студентку по имени Ann
const Ann= deepCopyStudents.find((st)=> st.name ===`Ann`)
console.log(Ann)

//12. Найдите студента с самым высоким баллом - reduce
const maxScore = deepCopyStudents.reduce((acc,st)=>{
    return acc.scores > st.scores ? acc : st;
})
console.log(maxScore)

//13. Найдите сумму баллов всех студентов
const allScoresSum = deepCopyStudents.reduce((acc,st)=>{
   return acc + st.scores;
},0)
console.log('13 pflfybt')
console.log(allScoresSum)

// 14.Напишите функцию addFriends, которая принимает
// параметром массив students и возвращает новый массив, при этом добавляет
// в каждому студенту свойство .friends, значением которого является массив имён
// всех остальных студентов из
// массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

// function addFriends (deepCopyStudents){
//     const studentsNames = deepCopyStudents.map((st)=> st.name);
//     function getFriendsList (student){
// const friendList = studentsNames.filter((name)=> student.name !== name)
//         return friendList
//     }
//
//     const studentsWithFriends = students.map((sts)=> {
//         return {...sts, friends:getFriendsList(sts)}
//     })
//     return studentsWithFriends
//
// }
//
// console.log(addFriends(deepCopyStudents))

// const addFriends = (sts) => {
//     return sts.map((st)=>{
//         return {...st, friends:sts.map((subSt)=>subSt.name).filter((name)=> name !== st.name)}
//     })
// }




const addFrineds = (sts)=>{
    return sts.map((st)=>{
        return {...st,friends:sts.map((subSt)=> subSt.name).filter((name)=> name !== st.name)}
    })
}
console.log(addFrineds(deepCopyStudents))
