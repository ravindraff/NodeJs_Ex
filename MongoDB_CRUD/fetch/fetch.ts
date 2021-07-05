import * as express from "express";
import * as mongodb from "mongodb";
let aIT = mongodb.MongoClient;
let fetch = express.Router().get('/', (req: any, res: any):any=>{
    aIT.connect("mongodb+srv://nodejs_usr:admin@cluster0.6mktf.mongodb.net/nodjs_db?retryWrites=true&w=majority"
    ,(err,connection)=>{
        if(err) throw err;
        else{
            let db = connection.db("nodejs_db");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }

            })
        }

    })
});
export default fetch;