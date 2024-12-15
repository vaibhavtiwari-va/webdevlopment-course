console.log("iam tutorial on loops");

let a=4;
console.log(a)
console.log(a+1)
console.log(a+2)

for(let i=0; i<100; i++){
    console.log(i+1)
}

let obj={
    name:"harry",
    role:"programmer",
    company: "codewithHarry AI",

}
  for(const key in obj) {
     console.log(key)
  }
  for (const c of "harry"){
    console.log(c)
  }

let i=0;
while(i<6000){
    console.log(i)
    i++;
}
let j=0;
do {
    console.log(j)
    j++;
} while (j<6);
