import {UserType} from "./10_01";

function makeHair(u:UserType){
    const userCopy= {...u, hair: u.hair/2}
    return userCopy
}

test('reference type function, immutability works', ()=>{
    let user:UserType={
        name:'Anton',
        hair:32,
        address:{title:'Novokuzntesk'}
    }

    const hairedUser = makeHair(user)

    expect(user.hair).toBe(32)
    expect(hairedUser.hair).toBe(16)
    expect(hairedUser.address).toBe(user.address) // подтверждение поверхностной копии
})