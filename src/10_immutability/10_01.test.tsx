import {UserType} from './10_01';

function hairdresser (u:UserType){
    const userCopy1 = {
        ...u
    }

    userCopy1.hair/= 2
    return userCopy1
}

test('some test of reference type', ()=>{
    let user:UserType={
        name: 'Anton',
        hair:30,
        address:{title:'Kaliningrad'}
    }
   const awesomeUser = hairdresser(user)

    expect(awesomeUser.hair).toBe(15)
    expect(user.hair).toBe(30)
})


