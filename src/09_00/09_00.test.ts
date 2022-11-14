const increaseAge = (u:UserType_09) => {
    u.age++;
}

type UserType_09 ={
    name:string
    age:number
}
// test('should increase user age', ()=>{
//
//     var user:UserType_09 = {
//         name:`Anton`,
//         age:32
//     }
//
//     increaseAge(user)
//
//     expect(user.age).toBe(33)
//
//     const superman = user;
//     superman.age = 1000;
//     expect(user.age).toBe(1000)
// })

// test ('array mutability test', ()=>{
//     var users:UserType_09[] = [{
//         name:`Anton`,
//         age:32
//     },
//         {
//             name:`Angelina`,
//             age:31
//         },
//     ]
//
//     var admins = users;
//
//     admins.push({
//         name:`Bandugan`,
//         age:10
//     })
//
//     expect(users[2]).toEqual({
//         name:`Bandugan`,
//         age:10
//     })
// })

test('ref type user obj')