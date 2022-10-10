import {ManType} from './05_01';

let people: Array<ManType> = [
    { name: 'Andrew Ivanov', age: 33 },
    { name: 'Alexander Petrov', age: 24 },
    { name: 'Dmitry Sidorov', age: 18 },
];

beforeEach(()=>{
  people =  [
        { name: 'Andrew Ivanov', age: 33 },
        { name: 'Alexander Petrov', age: 24 },
        { name: 'Dmitry Sidorov', age: 18 },
    ]
})

test('should get greetings messages',()=>{
    const messages = people.map((man)=>{
        return `Hello ${man.name.split(` `)[0]}`
    })

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe(`Hello Andrew`)
    expect(messages[1]).toBe(`Hello Alexander`)
    expect(messages[2]).toBe(`Hello Dmitry`)
})



