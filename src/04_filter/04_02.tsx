import {CityType, GovermentBuildingType, HouseType} from '../01-hello-tests/02_02';

export const addMoneyToBudget = (govBuilding:GovermentBuildingType, budget:number) => {
    govBuilding.budget += budget;
}

export const repairHouse = (hous:HouseType) => {
    hous.repaired = true;
}

export const toFireStaff = (govBuilding:GovermentBuildingType, stuffNumberChange:number) => {
    govBuilding.staffCount -= stuffNumberChange;
}

export const toHireStaff = (govBuilding:GovermentBuildingType, stuffNumberChange:number) => {
    govBuilding.staffCount += stuffNumberChange;
}

export const getBuildingsWithStaffCountGreaterThen = (buildings:Array<GovermentBuildingType>, people:number) => {
    console.log(buildings)
    buildings.filter((b) => b.staffCount > people)
}