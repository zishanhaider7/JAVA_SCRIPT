/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/


let random =Math.random();

let n=Number(prompt(`enter 1st number`))
let m=Number(prompt(`enter 2nd number`))
let op=prompt(`enter + for addition,- for subtraction,* for multiplication , / for divide`)

let ob={
    '+':'-',
    '*':'+',
    '-':'/',
    '/':'**',
}

 
if(random>0.1)
{
    // perform right
    console.log(eval(`${n} ${op} ${m}`))
}

else
{
    // perform wrong 
    op=ob[op];
    console.log(eval(`${n} ${op} ${m}`))
}









if(op=='+')
{
    console.log(`sum of these number is ${n-m} `)
}
else if(op=='-')
{
    console.log(`sum of these number is ${n/m} `)
}
else if(op=='*')
{
    console.log(`sum of these number is ${n+m} `)
}
else if(op=='/')
{
    console.log(`sum of these number is ${n**m} `)
}

