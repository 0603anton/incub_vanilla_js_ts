import {
    AdressNumberType,
    StreetTitleType,
    GovermentBuildingType,
    CityType,
    GovBuildAdressStreetTitleType
} from '../01-hello-tests/02_02';
import {addMoneyToBudget, getBuildingsWithStaffCountGreaterThen, repairHouse, toFireStaff, toHireStaff} from './04_02';


let city1: CityType;


    city1 = {
        title: 'New York',
        houses: [
            {
                id:1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: `White street`
                    }
                }
            },

            {
                id:2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },

            {
                id:3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            }
        ],
        governmentBuildings: [{
            type:`HOSPITAL`,
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: 'Central Str'
                }
            }
        },
            {
                type:'FIRE-STATION',
                budget: 500000,
                staffCount:1000,
                address:{
                    street:{
                        title:'South Str'
                    }

                }

            }],
        citizensNumber: 1000000
    }



const demolishHousesOnTheStreet = (city1:CityType, street:string) => {
    city1.houses.filter((h)=>{
        return h.address.street.title !== 'Happy street'
    })
}
// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city1, 'Happy street');

    expect(city1.houses.length).toBe(1);
    expect(city1.houses[0].id).toBe(1);

})




