// const todoListId_1 = '1';
// const todoListId_2 = '2';
//
// const todoLists = [
//     {
//         id: todoListId_1,
//         title: 'what to learn',
//         filter: 'all',
//     },
//     {
//         id: todoListId_2,
//         title: 'What to buy',
//     }
// ]
//
// const tasks = {
//     [todoListId_1]: [
//         {id: '11', title: 'HTML'},
//         {id: '12', title: 'CSS'},
//         {id: '13', title: 'JS&TS'},
//     ],
//     [todoListId_2]: [
//         {id: '21', title: 'beer'},
//         {id: '22', title: 'fish'},
//         {id: '23', title: 'cheese'},
//     ]
// }
//
// console.log([...tasks[todoListId_1]], {id: '14', title: 'Redux'})
// console.log(tasks[todoListId_2][0])
// console.log(tasks[todoListId_2].find(t => t.id === '21'))
//
// //C => [...], concat, push
// //R => map,filter,sort,find
// //U => map
// //D => filter
//
// //reduce
//
// const numbers = [1, 2, 3, 4, 5]
//
// console.log(numbers.reduce((acc, el) => {
//     return acc + el
// }, 0))
//
//
// // найти наибольшее число reduce
//
// console.log(numbers.reduce((acc, el) => {
//     return acc > el ? acc : el
// }))
//
// // найти сумму
//
// console.log(numbers.reduce((acc, el) => {
//     return acc + el
// }, 0))
//
// // самостоятельно попробуй реализовать map через  reduce

const A = [1,2,2,3,3,3,4,3,3,3,2,2,1];

function findOdd(A) {
    //happy coding!
    A.reduce((acc,el)=>{
        if (!acc.find(element => element === el)){
            acc.push(element)
        }
    }, [])
    return 0;
}

let sumOfDigits = (number)=>{
    let result = (number.toString().split(``).reduce((acc,el)=>{
        return acc + Number(el)
    },0))
    return result
}

console.log(sumOfDigits(10))