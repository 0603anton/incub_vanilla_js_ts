export type ManType ={
 name:string
 age:number
 lessons:LessonType[]
    address:AddressType
}

type LessonType={
    title:string
}

type AddressType={
    street:StreetType
}

type StreetType={
    title:string
}

let props:ManType;

beforeEach(()=>{
    props={
        name:'Anton',
        age:32,
        lessons:[{title:'1'},{title:'2'}],
        address:{
            street:{
                title:'Dubovaya street'
            }
        }
    }
    }
)



test(' ', ()=>{
    const title = props.address.street.title

const{age,lessons} = props

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
    expect(title).toBe('Dubovaya street')
} )