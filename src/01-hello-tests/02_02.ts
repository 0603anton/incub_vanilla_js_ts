export type StreetTitleType={
    title:string
}

export type AdressNumberType = {
    number?: number
    street:StreetTitleType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AdressNumberType

}

export type GovBuildAdressStreetTitleType={
    title: string
}

export type GovBuildAdressType={
    street:GovBuildAdressStreetTitleType
}

export type GovermentBuildingType={
    type:string
    budget:number
    staffCount:number
    address:GovBuildAdressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovermentBuildingType>
    citizensNumber: number
}
