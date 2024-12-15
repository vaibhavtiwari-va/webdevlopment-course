const fs=require("fs")

console.log(fs)


console.log("starting")
// fs.writeFileSync("vaibhav.txt", "vaibhav is abad boy")

fs.writeFile("harry2.txt","haarry is a good boy 2",()=>{
    console.log("done")
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("vaibhav.txt","harrryrobo",(e,d)=>{
    console.log(d)
})

console.log("ending")