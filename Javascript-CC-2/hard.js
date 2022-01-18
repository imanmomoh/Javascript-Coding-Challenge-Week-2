let tomHeight = 9 
let tomMass = 8
let jerryHeight = 10
let jerryMass = 45

let tomBMI = tomMass / tomHeight * tomHeight;
let jerryBMI = jerryMass / jerryHeight * jerryHeight;
let tomBiggerThanJerry = tomBMI > jerryBMI;
let jerryBiggerThanTom = tomBMI < jerryBMI;

console.log(tomBMI);
console.log(jerryBMI);

if(tomBiggerThanJerry){
    console.log("Is Tom's BMI greater than Jerry's?, Answer =" + tomBiggerThanJerry )
}else if(jerryBiggerThanTom){
    console.log("Is Tom's BMI less than Jerry's?, Answer =" + jerryBiggerThanTom)
}else console.log("None is greater")