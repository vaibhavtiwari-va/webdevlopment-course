let random =Math.random()

let a=prompt("Enter your first number")
let c=prompt("Enter your second number")
let b=prompt("Enter your opartion")

let obj={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**", 
}


 
if(random>0.1){
    //problem is correct
    console.log(`The result is ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)

}
 else{
    //problem is incorreect
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`) 
 }
 c=obj[0]
