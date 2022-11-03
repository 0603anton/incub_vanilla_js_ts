type UserType = {
    [key:string]:{id:number, name:string}
}

let users:UserType;

beforeEach(()=>{
    users = {
        '101': {id: 101, name: `Dimych`},
        '1212': {id: 1212, name: `Natasha`},
        '32323': {id: 32323, name: `Valera`},
        '1': {id: 1, name: `Katya`},
    }
})

test('name update some user', ()=>{

    users['101'].name = `Anton`

    expect(users['101'].name).toBe(`Anton`);
    expect(users['1212'].name).toBe(`Natasha`);
})