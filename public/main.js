// типы данных
// typeof не всегда верно определяет тип данных и иногда надо использовать вспомогательные методы  глобального объекта Number типа isFinite, isNan

const students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: 'Petya',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: 'Vasya',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: 'Tony',
        age: 19,
        isMarried: false,
        scores: 100
    },
];

const getNames = (arr) => {
    const result = []
    const getNewValue = (el) => el.name
    for (const newEl of arr) {

        result.push(getNewValue(newEl))
    }
    //.......
    return result
}

console.log(getNames(students))


const EasyFilter = (arr, fn) => {
    const result = []
    for (const newEl of arr) {
        if (fn(arr) === true) {
            result.push(el)
        }
    }
}
