test('should take man older than 90', ()=>{
    const ages = [18,20,22,1,100,90,14]
    // const olderThen = (age:number) => {
    //     return age>90;
    // }
    const result = ages.filter((el)=>{
        return el >90
    })

    expect(result.length).toBe(1)
})

test('get only done tasks', ()=>{
    const tasks = [
        {id:1, title:'task1',isDone:true},
        {id:2, title:'task2',isDone:true},
        {id:3, title:'task3',isDone:false},
        {id:4, title:'task4',isDone:true},
    ]

    const result = tasks.filter((t)=>{
        return !t.isDone
    })

    expect(result.length).toBe(1)
    expect(result[0].id).toBe(3)
})