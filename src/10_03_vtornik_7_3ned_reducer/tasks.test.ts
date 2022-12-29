import {ActionType, div, mult, salaryReducer, StateType, sub, sum} from "./tasks";

test('sum', ()=>{
    //1. Тестовые данные
    const salary:number = 900;
    const increaser:number = 200;
    //2. выполнить тестируемый код:
    const result = sum(salary,increaser)
    //3. Проверка результата
    expect(result).toBe(1100)
})

test('sub',()=>{
    expect(sub(1200,200)).toBe(1000)
})

test(`div salary`,()=>{
    //data
    const salary = 1000;
    const divNum = 2;
    //action
    const result = div(salary,divNum)
    // expectation
    expect(result).toBe(500)
})

test(`mult salary`,()=>{
    //data
    const salary = 1000;
    const divNum = 2;
    //action
    const result = mult(salary,divNum)
    // expectation
    expect(result).toBe(2000)
})


test(`case SUM of salary Reducer`, ()=>{
    const salary:StateType = 800
    const action: ActionType ={
        type:`SUM`,
        n:200
    }

    const result = salaryReducer(salary,action)
    expect(result).toBe(1000)
})