use("crud")

db.createCollection("courses")

db.courses.insertOne({
  name : "harry web dev free course",
  price :0,
  assignment : 12,
  project : 45
})

db.courses.insert({

})

let a= db.courses.find({
  price : 0
})

console.log(a.toArray())


// db.courses.updateOne({price :0},
// {$set:{price :100}})

// db.courses.updateMany({price :0},
//   {$set :{price :1000}}
// )
 
db.courses.deleteMany({price :0})

db.courses.deleteMany({price :1000})
  
db.courses.remove(document)