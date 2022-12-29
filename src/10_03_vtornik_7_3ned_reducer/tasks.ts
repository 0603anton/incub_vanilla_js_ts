export const sum = (salary: number, increaser: number) => {
    return salary + increaser;
}

export const sub = (salary: number, increaser: number) => {
    return salary - increaser;
}

export const div = (salary: number, increaser: number) => {
    return salary / increaser;
}
export const mult = (salary: number, increaser: number) => {
    return salary * increaser;
}


export type ActionType = {
    type: 'SUM',
    n: number
}

export type StateType = number;
export const salaryReducer = (salary: number, action: ActionType): StateType => { // вместо salary state
    switch (action.type) {
        case "SUM":{
            return salary + action.n
        }
        default:{
            return salary
        }
    }
}