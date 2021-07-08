var mClient = require("mongodb").MongoClient;
var mUrl = "mongodb://127.0.0.1:27017";
mClient.connect(mUrl,function(err,client){
    if(!err){
        console.log("Connected to MongoDB");
    }else{
        console.log(err);
    }

})