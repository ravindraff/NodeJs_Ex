import * as express from "express";
let Transaction:any = express.Router();
Transaction.get('/', (req: any, res: any):any => {
    res.status(200).json({"Message":"Welcome to Transaction Module"})
    res.end();
});
export default Transaction;