type LocalCityType = {
    title:string
    countryTitle:string
}
type AddressType = {
    streetTitle: string
    city:LocalCityType
}
type ThechnologyType={
    id:number
    title:string
}
type StudentType = {
    id:number,
    name:string,
    age:number,
    isActive:boolean,
    address:AddressType
    technologies:ThechnologyType[]   // Array<ThechnologyType>
}

const student:any= {
    id:1,
    name:'Anton',
    age:32,
    isActive: true,
    address:{
        streetTitle:'Dubovaya 7',
        city: {
            title:'Kaliningrad',
            countryTitle:'Russia'
        }
    },
    technologies:[
        {
            id:1,
            title:'HTML'
        },
        {
            id:2,
            title:'CSS'
        },
        {
            id:3,
            title:'React'
        },
    ]
}