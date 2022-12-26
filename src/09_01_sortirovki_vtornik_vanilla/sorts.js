
const strings = ["Alex", "Donald", "Bob"]
console.log(strings.sort())

const strings1 = ["Alex", "Donald", "Bob", 100] // 100, Alex, Bob, Donald
console.log(strings1.sort())

const strings2 = ["Alex", "alex", "Donald", "Bob", 100, "Юрий"] // 100, Alex,
// Bob, Donald, alex, Юрий

//1. сортирует строки "из коробки", т.е. без доп. параметров
//2. сортирует строки типа по "алфавиту" (unicode)
//3. работает мутабельно (сортирует на месте)
//4. возвращает ссылку на исходный массив

const numbers = [1000, 250, 99, 801]
console.log(numbers.sort())

//5. Для остальных случаев необходимо передатьфункцию сравнения (callback)

// const compareFunc = (a, b) => {  // по возрастанию
//   if(a > b){
//       return 10 // >0, если надо переставить
//   } else {
//       return -100 // <0, если не надо переставить
//   }
// }

const compareFunc = (a, b) => a - b   // 10, 100 => <0 ; 100, 10 => >0
console.log(numbers.sort(compareFunc))
console.log(numbers.sort((a, b) => a - b))

//6. Вместе с sort часто используется revers
//7. Сортировка массива объектов
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

console.log(students.sort((a, b)=> a.age - b.age)) // по возрасту
console.log(students.sort((a, b)=> { // регистрозависимая
    if(a.name > b.name){
        return 1
    } else {
        return  -1
    }
}))
console.log(students.sort((a, b)=> a.name.localeCompare(b.name))) // регистроHЕзависимая
console.log(students.sort((a, b) => { // вложенная сортировка (по возрасту и потом по успеваемости):
    if(a.age < b.age){
        return -1
    } else if (a.age > b.age){
        return 1
    } else {
        if(a.scores >= b.scores){
            return -1
        } else {
            return 1
        }
    }
}))


// bubble sort

const nums = [1,3,12,23,34,56,67,]  // по возрастанию

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if(nums[i] > nums[i + 1]){    //эл-ты стоят в неверном порядке
            isSorted = false;         // NB!!! => ;
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]] // деструктуризация
            // const temp = nums[i]
            // nums[i] =  nums[i + 1]
            // nums[i + 1] = temp
        }
    }
    if(isSorted)break
}
//O((n*(n/2) - 2n)*K), K < 1

console.log(nums);  // NB!!! => ;
(()=>{alert("yo")})()



