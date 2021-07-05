import * as express from "express";
let Account:any = express.Router();
Account.get('/', (req: any, res: any):any => {
    res.status(200).json({"Message":"Welcome to Account Module"})
    res.end();
});
export default Account;