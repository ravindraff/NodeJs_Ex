import * as express from "express";
import * as mongodb from "mongodb";
let ramIT = mongodb.MongoClient;
let fetch = express.Router().post('/', (req: any, res: any): any => {
    ramIT.connect("mongodb+srv://nodejs_usr:admin@cluster0.6mktf.mongodb.net/nodjs_db?retryWrites=true&w=majority", (err: any, connection: any): any => {
        if (err) throw err;
        else {
            let db = connection.db("nodejs_db");
            db.collection("products").insertOne({
                "id": req.body.id,
                "name": req.body.name,
                "quantity": req.body.quantity,
                "price": req.body.price,
                "category": req.body.category,
                "image": req.body.image
            }, (err: any, result: any) => {
                if (err) throw err;
                else {
                    res.send({ "Message": "document inserted successfully!!!!" })
                }

            });
        }

    })
});
export default fetch;