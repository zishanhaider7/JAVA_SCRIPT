/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/



function generator(name1,name2,name3,n1,n2,n3) {
    console.log(`The name of the complany is :: ${name1[n1]} ${name2[n2]}  ${name3[n3]}`)
}
let advective={
    1:"crazy",
    2:"Amazing",
    3:"Fire"
}

let shop_name={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}

let another={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

let n1 = Math.floor(Math.random() * 3) + 1;
let n2 = Math.floor(Math.random() * 3) + 1;
let n3 = Math.floor(Math.random() * 3) + 1;

generator(advective,shop_name,another,n1,n2,n3);

