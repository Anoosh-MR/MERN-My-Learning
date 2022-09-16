const express=require('express');
const bodyparser=require('body-parser')
const app=express();
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    var num1=Number( req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1 + num2;
    res.send("the result is:"+result);
});
app.get("/BMIcalculator",function(req,res){
    res.sendFile(__dirname +"/BMIcalculator.html");
});
app.post("/BMIcalculator",function(req,res){
var weight=Number(req.body.n1);
var height=Number(req.body.n2);
BMI=weight/(height*height);
res.send("Your BMI is "+BMI);
});
app.listen(3000,function(req,res){
    console.log("server is running at port 3000");
});