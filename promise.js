console.log('this is my promise')

let prom1= new Promise((resolve,reject)=>{
    let a=Math.random();
    if (a<0.5){
    reject("no random number is supporting you")
    }
  else { setTimeout(()=>{
        console.log("yes iam done ")
        resolve("harry")
    },3000);
  }
})

let prom2= new Promise((resolve,reject)=>{
    let a=Math.random();
    if (a<0.5){
    reject("no random number is supporting you 2")
    }
  else { setTimeout(()=>{
        console.log("yes iam done ")
        resolve("harry 2")
    },1000);
  }
})


let p3=Promise.all([prom1,prom2])
    p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
