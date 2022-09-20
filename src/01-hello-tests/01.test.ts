import {mult, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //data глобальные переменные

    //action
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    //expected result

    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test('mult should be correct', () => {
    //data

    //action
    const mult1 = mult(a, b);
    const mult2 = mult(b, c);

    //expected result

    expect(mult1).toBe(2);
    expect(mult2).toBe(6);
})

test('split sent', () => {
//    Data
    const str = 'hello world';

    // action
    const splitSent = splitIntoWords(str);

//    expected result
    expect(splitSent.length).toBe(2);
    expect(splitSent[0]).toBe('hello')
    expect(splitSent[1]).toBe('world')
})