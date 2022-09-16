const express=require("express");
const bodyparser=require("body-parser");
const https=require("https");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
    
        });
app.post("/",function(req,res){



        const query=req.body.Cityname;
        const apikey="e6a12f33ad7eb449ac5e77aa0b2eae53";
        const unit="metric";
        const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherdata=JSON.parse(data)
            const temp=weatherdata.main.temp;
            const discription=weatherdata.weather[0].description
            const icon=weatherdata.weather[0].icon
            const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
           res.write( "<p></p>the weather is currently " + discription + "</p>");
            res.write("<h1>Temperature in "+query+" is"+temp+"digree celsius</h1>");
            res.write("<img src="+imageURL+">");
            res.send();
    
});


});
});

        
    


app.listen(3000,function(){
    console.log("Server is running at port 3000");
});