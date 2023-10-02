const Specifications =[
    {
        name:"ali",
        age: 30
    },
    {
        name:"amin",
        age: 24
    },
    {
        name:"sara",
        age: 32
    }
]


Specifications.sort((a, b) => b.age > a.age ? -1:1 ) 
console.log(Specifications);