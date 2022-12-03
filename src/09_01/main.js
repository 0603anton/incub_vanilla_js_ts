const strings = ['alex', 'bob', 'donald']

console.log(strings.sort())

const compareFunc = (a, b) => {
    if (a <= b) {
        return -1 // если < 0, не надо ничего менять
    } else {
        return 100 // надо менять местами
    }
}

// поскольку требуется возвращать именно положительное или отриц число укорачиваем функцию

const shortCompareFunc = (a, b) => a - b // если надо наоборот надо изменить типа b-a

// пузырьком bubble sort
const nums = [12, 23, 34, 9, 1, 45, 77, 91]

// вохможно -1 убрать и внутр и внеш и сделать j =1
for (let j = 0; j < nums.length - 1; j++) { // т.к. за каждый проход самое большое число будет
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) { //в конце то можно количество проходов внутреннего цикла уменьшать на кол-во проъодов внешнего
        if (nums[i] > nums[i + 1]) { //
            isSorted = false;
            // let temp = nums[i + 1]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums[i],nums[i + 1]] = [nums[i + 1],nums[i]]
        }
    }
    if(isSorted)break;
}

// конструкция с if позволяет избежать ненужных проходов
// если строка начинается с квадратнфх скобок то перед ними ставим точка с запятой
