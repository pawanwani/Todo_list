const express = require("express");
const BodyParser = require("body-parser");
const bodyParser = require("body-parser");

const app = express();
var items=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    
    var today = new Date();
    var option={
        weekday: "long",
        day:"numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-US",option)
    
    res.render("list", {dayOfWeek:day,listText:items});

});

app.post("/",function(req,res){
    item=req.body.newTask
    items.push(item);  
    res.redirect("/");
})


app.listen(3000,function(){
    console.log("Server is running on port 3000.");
})