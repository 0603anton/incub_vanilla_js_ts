export type UserType = {
    name: string
    hair: number
    address: { title: string, city?: string }
}
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & { //TODO новая фишка совмещения типов типа все св-ва этого типа + лэптоп
    laptop: LaptopType
}

export type UserWithBooksType = UserWithLaptopType & {
    books: string[]
}

export type WithCompaniesType = {
    companies: Array<{id:number, title:string }>
}



export function makeHair(u: UserType) {
    const userCopy = {...u, hair: u.hair / 2}
    return userCopy
}

export function change_adr(u: UserWithLaptopType) {
    return {...u, address: {...u.address, city: `Moscow`}}
}

export const update_laptop = (u: UserWithLaptopType) => {
    return {...u, laptop: {...u.laptop, title: `MacBook`}}
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType) {
    return {...u, address: {...u.address, title: `Izumrudnaya`}}
}

export function addBook(u: UserWithLaptopType & UserWithBooksType) {
    return {...u, books: [...u.books, `harry potter 3`]}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {...u, books: u.books.map((book) => book === oldBook ? newBook : book)}

    // Ошибся в том, что положил обратно в ведро всё, а именно, сразу обернул в массив
    // и пришлось ещё дополнительно деструктурировать, а это лишнее. Второе лишнее, то что я зачем, то присваивал
    // бук значение и его возвращал, это вообще непонятно зачем. Map же возвращает элементы поочередно. Ошибки ниже:
    // {...u, books:[...u.books.map((book)=> book === oldBook? book=newBook:book)]}
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookToRemove: string) {
    return {...u, books: u.books.filter((book)=> book !== bookToRemove)}
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, company: string) {
    return {...u, companies: [...u.companies, {id:3, title:company}]}
}

export function changeCompany(u: UserWithLaptopType & WithCompaniesType,id:number, company: string) {
    return {...u, companies: u.companies.map((compan)=> compan.id === id ? {...compan, title:company} : compan)}
}
// TODO в функцию достаточно, только частично передавать тип, где присутсвует св-во с которым работает функция

export function changeCompany2(companies:{[key:string]:WithCompaniesType[]}, userName: string, comoanyID:number, newTitle:string) {
    let copy = {...companies}
    copy[userName] = copy['Anton'].map
}