const mongoose= require('mongoose')
mongoose.connect("mongodb://localhost:27017/testdb",{ useNewUrlParser: true })

const newSchema=  new mongoose.Schema({
  id:Number,
  name:String,
  reviews:String

})

const newModel=mongoose.model("test",newSchema)

const firstData= new newModel({
  id:1,
  name:"First item",
  reviews:"Average"
})

const secondData= new newModel({
  id:2,
  name:"Second item",
  reviews:"Average"
})

const thirdData= new newModel({
  id:3,
  name:"Third item",
  reviews:"Good"
})

const fourthData= new newModel({
  id:4,
  name:"Fourth item",
  reviews:"Excellent"
})


// newModel.insertMany([firstData,secondData,thirdData,fourthData], function(err){
//   if(err){
//     console.log("Error")
//   }
//   else{
//     console.log("Success")
//   }
// })

newModel.find(function(err,tests){
  if(err){
    console.log("Error")
  }
  else{
    mongoose.connection.close()
  tests.forEach(function(test){
    console.log(test.name)

  })
  }
})
