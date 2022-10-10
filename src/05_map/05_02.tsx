import {GovermentBuildingType, HouseType} from "../01-hello-tests/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovermentBuildingType>) => {
    return buildings.map((b)=>{
        return b.address.street;
    })
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map((h)=>{
        return h.address.street.title
    })
}