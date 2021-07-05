import * as express from "express";
let accounts: any = express.Router();
accounts.get('/', (req: any, res: any) => {
    res.status(200).json({
        message: "accounts soon...!"
    })
});
accounts.get('/acc', (req: any, res: any) => {
    res.status(200).json({message: "accounts data soon...!"})
});

export default accounts


