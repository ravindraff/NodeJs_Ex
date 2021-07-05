import * as express from "express";
let Cards:any = express.Router();
Cards.get('/',(req: any, res: any):any => {
    res.status(200).json({"Message":"Welcome to Cards Module"})
    res.end();
})

export default Cards
