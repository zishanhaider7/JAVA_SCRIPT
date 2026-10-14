console.log(`we are going to make fatorial excercise`)

//   Write a program to calculate factorial of a number using reduce and using for loops

//         6! = 6*5*4*3*2*1


let num=7;

let arr=[]

for(let i=1;i<=num;i++)
{
    arr.push(i);
}

const red=(a,b)=>{
    return a*b;
}

console.log(`The factorial of the number is ${arr.reduce(red)}`)