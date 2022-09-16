const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true});
const fruitSchema=new mongoose.Schema({
    name:{type:String,required:[true,"please check"]},
    rating:Number,
    review:String
});
const Fruit=mongoose.model("Fruit",fruitSchema);
const fruit=new Fruit({
  
    rating:{type:Numbers,min:1,max:10},
    review:"good fruit"
});
fruit.save();


const findDocuments=function(db,callback){
    const collection=db.collection('fruits');
    collection.find({}).toArray(function(err,fruits){
    assert.equal(err,null);
    HTMLFormControlsCollection.log("found the following records");
    console.log(fruits);
    callback(fruits);
    });
};






