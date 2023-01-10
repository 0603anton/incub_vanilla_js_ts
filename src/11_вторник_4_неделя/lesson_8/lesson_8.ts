// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

import {res} from "../../03/03";

export function sum(...nums: Array<number>): number {
    console.log(nums)
    const result = nums.reduce((acc, el) => {
        return acc + el;
    })
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b == c) {
            return `10`
        } else if (a == b || b == c || c == a) {
            return `01`
        } else if (a !== b || b !== c || c !== a) {
            return `11`
        }
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return "00"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return number.toString().split(``).reduce((acc, el) => acc + Number(el), 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumEven = arr.map((el, i) => { // можно через фильтр
        return i % 2 == 0 ? el : 0
    }).reduce((acc, curr) => {
        return acc + curr
    })
    let sumOdd = arr.map((el, i) => {
        return i % 2 !== 0 ? el : 0
    }).reduce((acc, curr) => {
        return acc + curr
    })
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return sumEven > sumOdd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.filter((el) => Number.isInteger(el)).filter(el => el > 0).map(el => el ** 2)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.
// sumTo(n) = n + sumTo(n-1) for n > 1.
export function sumFirstNumbers(N: number): number {
    let result = 0;
    for (let i = N; i >=0 ; i--) {
        result+=i
    }
    return result
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено



//https://www.youtube.com/watch?v=x-BsFzVadKM
//     export function getBanknoteList(amountOfMoney: number): Array<number> {
//         const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
//         let result =[]
//         if (amountOfMoney >+ 1000){
//
//             for (let i = Math.trunc(amountOfMoney/1000); i >0 ; i--) {
//                 result.push(1000)
//             }
//         } else if (amountOfMoney >+ 1000){
//             for (let i = amountOfMoney/1000; i >0 ; i--) {
//                 result.push(1000)
//             }
//         }
//         //...здесь пишем код.
//         // В return стоит "заглушка", чтоб typescript не ругался
//         return [1]
//     }
//https://www.youtube.com/watch?v=f3-tg0CeDlg
export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let arr = [];
    if (amountOfMoney > 0){
        for (let i = 0; i < banknotes.length; i++) {
            while (amountOfMoney - banknotes[i] >= 0) {
                amountOfMoney -= banknotes[i]
                arr.push(banknotes[i])
            }
        }
    } else {
        console.log("We can't give your amount of money:" + amountOfMoney)
    }
    return arr
}