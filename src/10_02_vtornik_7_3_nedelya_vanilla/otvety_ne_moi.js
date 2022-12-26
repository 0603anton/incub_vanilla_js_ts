//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const  repeatString = (str,repeats, separator ) => {
    let newStr='';
    for (let i=0; i < repeats; i++) {
        newStr = newStr + str + separator

    }
    newStr = newStr.slice()
    return newStr
}


(str + sep).repeat(repeatCount).slice(0, -sep.length)


function repeatString(substring, countOfRepeat, separator) {
    let newValue = '';
    for (let i = 1; i <= countOfRepeat; i++) {
        i !== countOfRepeat ? (newValue += substring + separator) : (newValue += substring)
    }
    return newValue
};


const repeatString2 = (expression, count, devider) => (expression + devider).repeat(count)

(str + sep).repeat(repeatCount).slice(0, -sep.length)



//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart= (str, subStr) => {
    let result;
    if (subStr) {
        return str.toLowerCase().indexOf(subStr.toLowerCase(), 0) === -1 ? false : true

    } else return false

}

const checkStart = (str, substr)
// From Ivan Onishchenko to Everyone 09:34 PM
function checkStart(str, unstr) {
    return str.slice(0, unstr.length).toLowerCase() === unstr.toLowerCase();
}
// From Алексей Видов to Everyone 09:34 PM
const checkStart = (str, start) => {
    return str.toLowerCase().startsWith(start.toLowerCase());
};
// From Władysław Kurczenko to Everyone 09:34 PM
const checkStart = (expression, start) => expression.slice(0, start.length).toLowerCase() === start
// From Елена Бойко to Everyone 09:34 PM
function checkStart(string, substring) {
    return string.toLowerCase().startsWith(substring.toLowerCase()) ? true : false
};
// From Никита Козлов to Everyone 09:34 PM

const lowerCaseStr = string.toLowerCase()
const lowerCaseSubstr = substring.toLowerCase()
// return lowerCaseStr.startsWith(lowerCaseSubstr)

// From Чашин Александр to Everyone 09:36 PM
let result = word.toLowerCase().startsWith(start.toLowerCase());

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
const truncateString = (str, count) => {
    let newStr= str.slice(0, count)+'...'
    return newStr
}
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
const getMinLengthWord= (str) => {
    return   str.split(' ').reduce((acc,el) => acc.length < el.length ? acc : el)
}
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
const setUpperCase = (str) => {
    return str.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
}
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.

const isIncludes = (str, subStr) => {
    return subStr.toLowerCase().split('').map(el => str.toLowerCase().indexOf(el, 0) >= 0 ? true : false).every(el => el)

}
isIncludes("Incubator", "Cut")
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true