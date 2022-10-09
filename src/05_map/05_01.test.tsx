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



// // 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
// test('list of streets titles of government buildings', ()=> {
//     let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);
//
//     expect(streetsNames.length).toBe(2);
//     expect(streetsNames[0]).toBe("Central Str");
//     expect(streetsNames[1]).toBe("South Str");
// })
//
// //02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
// test('list of streets titles', ()=> {
//     let streetsNames = getStreetsTitlesOfHouses(city.houses);
//
//     expect(streetsNames.length).toBe(3);
//     expect(streetsNames[0]).toBe("White street");
//     expect(streetsNames[1]).toBe("Happy street");
//     expect(streetsNames[2]).toBe("Happy street");
// })