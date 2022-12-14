//1. Реализуйте функцию, которая принимает параметром подсторку,
// число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()


//with .repeat() аргумент кол-во повторений
// const repeatString = (string, count, separator) => {
//     return (string + separator).repeat(count)
// }

// with for loop
// const repeatString = (string, count, separator) => {
//     let str =``;
//     for (let i = 0; i < count; i++) {
//
//         str+= string + separator;
//     }
//     return str;
// }
// console.log(repeatString("yo", 3, " "))
// console.log(repeatString("yo", 3, ","))


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startsWith() slice indexOF

//startsWith
// const checkStart = (fullStr, chunk)=>{
//     return fullStr.toLowerCase().startsWith(chunk)
// }

//slice
// const checkStart = (fullStr, chunk)=>{
//     return fullStr.toLowerCase().slice(0,chunk.length)=== chunk;
// }

// indexOf
// const checkStart = (fullStr, chunk)=>{
//     if (chunk){
//         return fullStr.toLowerCase().indexOf(chunk) === 0 ? true :false
//     } else {
//         return false
//     }
// }
//
//
// console.log(checkStart("Incubator", "inc"))
// console.log(checkStart("Incubator", "yo"))




//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров,
// обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

// const truncateString = (str, numberOfSymbols)=>{
//     return str.slice(0,numberOfSymbols) + `...`
// }
//
// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()


// loop /через цикл
// const getMinLengthWord = (str) => {
//     if (!str.length) {
//         return null
//     } else {
//         const arr = str.split(` `);
//         console.log(arr)
//         let shortestWord = arr[0];
// for (let elem of arr){
//     if (elem.length < shortestWord.length){
//         shortestWord = elem;
//     }
// }
//         return shortestWord;
//     }
// }

// reduce

const getMinLengthWord = (str) => {
    return str.split(` `).reduce((acc,el)=>{
        return acc.length < el.length ? acc:el;
    })
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

// const setUpperCase = (str)=>{
//     const firstLetter = str.slice(0,1).toUpperCase();
//     const rest = str.slice(1).toLowerCase();
//     return firstLetter+rest;
// }

const setUpperCase = (str)=>{
    return str.toLowerCase().split(` `).map(el=> el[0].toUpperCase() + el.slice(1)).join(` `)
}


console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

// const isIncludes = (str, chunk)=>{
//
//     let arrOfLetters = chunk.toLowerCase().split(``);
//     for (const arrOfLetter of arrOfLetters) {
//         if (str.toLowerCase().indexOf(arrOfLetter) === -1){
//             return false;
//         }
//     }
//     return true
// }

const isIncludes = (str, subStr) => {
    return subStr.toLowerCase().split('').map(el => str.toLowerCase().indexOf(el, 0) >= 0 ? true : false).every(el => el)

}
console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log(isIncludes("Incubator", "inba"))
console.log(isIncludes("Incubator", "Incubatorrr"))




