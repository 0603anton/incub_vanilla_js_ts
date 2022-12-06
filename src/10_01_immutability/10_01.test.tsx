import {
    addBook, addCompany,
    change_adr, changeCompany, changeCompany2, compa,
    makeHair,
    moveUserToOtherHouse, removeBook,
    update_laptop, updateBook,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


test('reference type function, immutability works', () => {
    let user: UserType = {
        name: 'Anton',
        hair: 32,
        address: {title: 'Novokuzntesk'}
    }

    const hairedUser = makeHair(user)

    expect(user.hair).toBe(32)
    expect(hairedUser.hair).toBe(16)
    expect(hairedUser.address).toBe(user.address) // подтверждение поверхностной копии
})


test('change address', () => {
    let awesomeUser: UserWithLaptopType = {
        name: 'Anton',
        hair: 32,
        address: {title: 'Dubovaya', city: 'Kalik'},
        laptop: {title: `asus`}
    }

    const movedUser = change_adr(awesomeUser)

    expect(awesomeUser).not.toBe(movedUser)
    expect(movedUser.laptop).toBe(awesomeUser.laptop)
    expect(movedUser.address).not.toBe(awesomeUser.address) // подтверждение поверхностной копии
})


test('Upgrade user laptop', () => {
    let awesomeUser: UserWithLaptopType = {
        name: 'Anton',
        hair: 32,
        address: {title: 'Dubovaya', city: 'Kalik'},
        laptop: {title: `asus`}
    }

    const upgraded = update_laptop(awesomeUser)

    expect(awesomeUser).not.toBe(upgraded)
    expect(upgraded.laptop).not.toBe(awesomeUser.laptop)
    expect(upgraded.laptop.title).toBe(`MacBook`)
    expect(upgraded.address).toBe(awesomeUser.address) // подтверждение поверхностной копии
})

test('Upgrade user adresse', () => {
    let awesomeUser: UserWithLaptopType & UserWithBooksType = {
        name: 'Anton',
        hair: 32,
        address: {title: 'Dubovaya', city: 'Kalik'},
        laptop: {title: `asus`},
        books: [`harry potter1`, `harry potter2`]
    }

    const upgraded = moveUserToOtherHouse(awesomeUser)

    expect(awesomeUser).not.toBe(upgraded)
    expect(awesomeUser.books).toBe(upgraded.books)
    expect(upgraded.laptop).toBe(awesomeUser.laptop)
    expect(upgraded.address).not.toBe(awesomeUser.address)
    expect(upgraded.address.title).not.toBe(awesomeUser.address.title)
})


test('add book', () => {
    let awesomeUser: UserWithLaptopType & UserWithBooksType = {
        name: 'Anton',
        hair: 32,
        address: {title: 'Dubovaya', city: 'Kalik'},
        laptop: {title: `asus`},
        books: [`harry potter1`, `harry potter2`]
    }

    const upgraded = addBook(awesomeUser)

    expect(awesomeUser).not.toBe(upgraded)
    expect(awesomeUser.books).not.toBe(upgraded.books)
    expect(upgraded.books[2]).toBe(`harry potter 3`)
    expect(upgraded.laptop).toBe(awesomeUser.laptop)
    expect(upgraded.address).toBe(awesomeUser.address)
    expect(upgraded.address.title).toBe(awesomeUser.address.title)
})

test('updateNewBook', () => {
    let awesomeUser: UserWithLaptopType & UserWithBooksType = {
        name: 'Anton',
        hair: 32,
        address: {title: 'Dubovaya', city: 'Kalik'},
        laptop: {title: `asus`},
        books: [`js`, `css`, 'hz']
    }

    const upgraded = updateBook(awesomeUser, `js`, `ts`)

    expect(awesomeUser).not.toBe(upgraded)
    expect(awesomeUser.books).not.toBe(upgraded.books)
    expect(upgraded.books[0]).toBe(`ts`)
    expect(upgraded.laptop).toBe(awesomeUser.laptop)
    expect(upgraded.address).toBe(awesomeUser.address)
    expect(upgraded.address.title).toBe(awesomeUser.address.title)
})

test('removeBook', () => {
    let awesomeUser: UserWithLaptopType & UserWithBooksType = {
        name: 'Anton',
        hair: 32,
        address: {title: 'Dubovaya', city: 'Kalik'},
        laptop: {title: `asus`},
        books: [`js`, `css`, 'hz']
    }

    const upgraded = removeBook(awesomeUser, `js`)

    expect(awesomeUser).not.toBe(upgraded)
    expect(awesomeUser.books).not.toBe(upgraded.books)
    expect(upgraded.books.length).toBe(2)
    expect(upgraded.books[0]).toBe('css')
    expect(upgraded.laptop).toBe(awesomeUser.laptop)
    expect(upgraded.address).toBe(awesomeUser.address)
    expect(upgraded.address.title).toBe(awesomeUser.address.title)
})

test('addCompany', () => {
    let awesomeUser: UserWithLaptopType & WithCompaniesType = {
        name: 'Anton',
        hair: 32,
        address: {title: 'Dubovaya', city: 'Kalik'},
        laptop: {title: `asus`},
        companies: [
            {
                id: 1,
                title: `Sber`
            },
            {
                id: 2,
                title: `it-incubator`
            },
        ]
    }


    const upgraded = addCompany(awesomeUser, `google`)

    expect(awesomeUser).not.toBe(upgraded)
    expect(upgraded.laptop).toBe(awesomeUser.laptop)
    expect(upgraded.address).toBe(awesomeUser.address)
    expect(upgraded.address.title).toBe(awesomeUser.address.title)
    expect(upgraded.companies[2].title).toBe('google')
})

// test('changeCompany', () => {
//     let awesomeUser: UserWithLaptopType & WithCompaniesType = {
//         name: 'Anton',
//         hair: 32,
//         address: {title: 'Dubovaya', city: 'Kalik'},
//         laptop: {title: `asus`},
//         companies: [
//             {
//                 id: 1,
//                 title: `Sber`
//             },
//             {
//                 id: 2,
//                 title: `it-incubator`
//             },
//         ]
//     }
//
//
//     const upgraded = changeCompany(awesomeUser, 1, `google`)
//
//     expect(awesomeUser).not.toBe(upgraded)
//     expect(upgraded.laptop).toBe(awesomeUser.laptop)
//     expect(upgraded.address).toBe(awesomeUser.address)
//     expect(upgraded.address.title).toBe(awesomeUser.address.title)
//     expect(upgraded.companies[0].title).toBe('google')
// })

test('changeCompanyaaa', () => {
    // let awesomeUser: UserWithLaptopType = {
    //     name: 'Anton',
    //     hair: 32,
    //     address: {title: 'Dubovaya', city: 'Kalik'},
    //     laptop: {title: `asus`},
    // }

    let companies = {
        'Anton': [
            {
                id: 1,
                title: `Sber`
            },
            {
                id: 2,
                title: `it-incubator`
            },
        ],
        'ARTEM': [
            {
                id: 1,
                title: `Sber`
            },

        ]
    }

    let changedCompany:compa = changeCompany2(companies, 'Anton',1,'SBER')

    console.log(changedCompany)
        expect(changedCompany['Anton'][0].title).toBe('SBER')

})